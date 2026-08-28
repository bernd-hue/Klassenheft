#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Klassenheft Übertragung.

Kleines Hilfsprogramm, damit Handy, iPad und Rechner ihre Daten im selben
WLAN direkt austauschen können, ohne Cloud und ohne Internet.

Was es macht:
  1. Es liefert die Klassenheft-App an alle Geräte im WLAN aus.
  2. Es hält eine Ablage bereit. Ein Gerät legt seine Daten hinein,
     das andere holt sie und führt sie mit dem eigenen Stand zusammen.

Was es nicht macht:
  Es speichert nichts dauerhaft, es sendet nichts ins Internet und es
  verbindet sich mit keinem Server. Die Ablage liegt nur im Arbeitsspeicher
  und ist weg, sobald das Programm beendet wird.

Starten: dieses Fenster offen lassen. Beenden: Strg und C drücken oder das
Fenster schließen.
"""

import http.server
import json
import os
import random
import socket
import socketserver
import sys
import time

PORT = 8787
ORDNER = os.path.dirname(os.path.abspath(__file__))

# Vierstelliger Code. Er steht nur in diesem Fenster und schützt die Ablage
# vor anderen Geräten im selben Netz.
CODE = "%04d" % random.randint(1000, 9999)

# Die Ablage: ein einziger Datenstand, im Arbeitsspeicher.
ablage = {"daten": None, "geraet": "", "zeit": ""}

MAX_BYTES = 80 * 1024 * 1024  # 80 MB, reicht auch für viele Fotos


def lan_adresse():
    """Die Adresse, unter der der Rechner im WLAN erreichbar ist."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Es wird nichts gesendet, das Betriebssystem verrät nur die
        # eigene Adresse im Netz.
        s.connect(("192.168.1.1", 9))
        return s.getsockname()[0]
    except Exception:
        try:
            return socket.gethostbyname(socket.gethostname())
        except Exception:
            return "127.0.0.1"
    finally:
        s.close()


class Handler(http.server.SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ORDNER, **kwargs)

    # Ruhiges Fenster: nur das Wesentliche anzeigen
    def log_message(self, format, *args):
        pfad = self.path.split("?")[0]
        if pfad.startswith("/ablage"):
            sys.stdout.write("  %s %s\n" % (self.command, pfad))
            sys.stdout.flush()

    def kopf(self, status, typ="application/json; charset=utf-8"):
        self.send_response(status)
        self.send_header("Content-Type", typ)
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

    def antwort(self, status, objekt):
        roh = json.dumps(objekt, ensure_ascii=False).encode("utf-8")
        self.kopf(status)
        self.wfile.write(roh)

    def code_stimmt(self):
        return (self.headers.get("X-Klassenheft-Code") or "").strip() == CODE

    def do_GET(self):
        pfad = self.path.split("?")[0]
        if pfad == "/ablage/status":
            self.antwort(200, {
                "klassenheft": True,
                "vorhanden": ablage["daten"] is not None,
                "geraet": ablage["geraet"],
                "zeit": ablage["zeit"]
            })
            return
        if pfad == "/ablage":
            if not self.code_stimmt():
                self.antwort(403, {"fehler": "Code stimmt nicht"})
                return
            if ablage["daten"] is None:
                self.antwort(404, {"fehler": "Ablage ist leer"})
                return
            self.kopf(200)
            self.wfile.write(ablage["daten"])
            return
        if pfad == "/":
            self.path = "/index.html"
        super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/ablage":
            self.antwort(404, {"fehler": "unbekannt"})
            return
        if not self.code_stimmt():
            self.antwort(403, {"fehler": "Code stimmt nicht"})
            return
        try:
            laenge = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            laenge = 0
        if laenge <= 0 or laenge > MAX_BYTES:
            self.antwort(413, {"fehler": "Datenmenge passt nicht"})
            return
        roh = self.rfile.read(laenge)
        try:
            geprueft = json.loads(roh.decode("utf-8"))
            if not isinstance(geprueft.get("classes"), list):
                raise ValueError
        except Exception:
            self.antwort(400, {"fehler": "keine Klassenheft-Daten"})
            return
        ablage["daten"] = roh
        ablage["geraet"] = str(geprueft.get("geraet") or "")[:60]
        ablage["zeit"] = time.strftime("%H:%M")
        klassen = len(geprueft.get("classes") or [])
        print("  Daten abgelegt%s um %s, %d Klasse(n)" % (
            (" von " + ablage["geraet"]) if ablage["geraet"] else "",
            ablage["zeit"], klassen))
        self.antwort(200, {"ok": True})

    def do_DELETE(self):
        if self.path.split("?")[0] != "/ablage":
            self.antwort(404, {"fehler": "unbekannt"})
            return
        if not self.code_stimmt():
            self.antwort(403, {"fehler": "Code stimmt nicht"})
            return
        ablage["daten"] = None
        ablage["geraet"] = ""
        ablage["zeit"] = ""
        print("  Ablage geleert")
        self.antwort(200, {"ok": True})


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def start(port):
    for versuch in range(20):
        try:
            return Server(("0.0.0.0", port + versuch), Handler), port + versuch
        except OSError:
            continue
    return None, None


def main():
    if not os.path.exists(os.path.join(ORDNER, "index.html")):
        print("index.html fehlt. Dieses Programm muss im selben Ordner liegen wie die App.")
        input("Zum Beenden die Eingabetaste drücken. ")
        return

    server, port = start(PORT)
    if server is None:
        print("Es war kein freier Anschluss zu finden. Bitte andere Programme schließen und neu versuchen.")
        input("Zum Beenden die Eingabetaste drücken. ")
        return

    adresse = lan_adresse()
    strich = "=" * 58
    print("")
    print(strich)
    print("  KLASSENHEFT ÜBERTRAGUNG LÄUFT")
    print(strich)
    print("")
    print("  1. Am Handy oder iPad diese Adresse im Browser eingeben:")
    print("")
    print("         http://%s:%d" % (adresse, port))
    print("")
    print("  2. Auf beiden Geräten unter Einstellungen diesen Code eingeben:")
    print("")
    print("         %s" % CODE)
    print("")
    print("  3. Am Gerät mit den neueren Einträgen auf")
    print("     »Daten hier ablegen« tippen, am anderen Gerät auf")
    print("     »Daten holen und zusammenführen«.")
    print("")
    print("  Am Rechner selbst: http://localhost:%d" % port)
    print("")
    print("  Beide Geräte müssen im selben WLAN sein.")
    print("  Fenster offen lassen. Beenden mit Strg und C.")
    print(strich)
    print("")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("")
        print("  Beendet. Die Ablage ist gelöscht.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
