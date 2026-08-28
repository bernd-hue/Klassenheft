/*
 * Klassenheft Übertragung, Fassung für Node.
 *
 * Gleiche Aufgabe wie uebertragung.py, nur für Rechner, auf denen Node
 * installiert ist und Python nicht. Es wird nur eingebaute Funktionalität
 * verwendet, es muss nichts nachinstalliert werden.
 *
 * Starten:  node uebertragung.js
 * Beenden:  Strg und C
 */

const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 8787;
const ORDNER = __dirname;
const CODE = String(Math.floor(1000 + Math.random() * 9000));
const MAX_BYTES = 80 * 1024 * 1024;

let ablage = { daten: null, geraet: "", zeit: "" };

const TYPEN = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".md": "text/plain; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};

function lanAdresse(){
  const netze = os.networkInterfaces();
  for(const name of Object.keys(netze)){
    for(const eintrag of netze[name] || []){
      if(eintrag.family === "IPv4" && !eintrag.internal) return eintrag.address;
    }
  }
  return "127.0.0.1";
}

function jsonAntwort(res, status, objekt){
  const roh = Buffer.from(JSON.stringify(objekt), "utf8");
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(roh);
}

function codeStimmt(req){
  return String(req.headers["x-klassenheft-code"] || "").trim() === CODE;
}

function jetzt(){
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

function statischAusliefern(req, res, pfad){
  let name = decodeURIComponent(pfad.split("?")[0]);
  if(name === "/" || name === "") name = "/index.html";
  /* Nur Dateien aus dem eigenen Ordner, keine Ausflüge nach oben */
  const ziel = path.join(ORDNER, path.normalize(name).replace(/^(\.\.[/\\])+/, ""));
  if(!ziel.startsWith(ORDNER)){ jsonAntwort(res, 403, { fehler: "nicht erlaubt" }); return; }
  fs.readFile(ziel, function(err, inhalt){
    if(err){ jsonAntwort(res, 404, { fehler: "nicht gefunden" }); return; }
    res.writeHead(200, { "Content-Type": TYPEN[path.extname(ziel).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(inhalt);
  });
}

const server = http.createServer(function(req, res){
  const pfad = req.url.split("?")[0];

  if(pfad === "/ablage/status" && req.method === "GET"){
    jsonAntwort(res, 200, { klassenheft: true, vorhanden: ablage.daten !== null, geraet: ablage.geraet, zeit: ablage.zeit });
    return;
  }

  if(pfad === "/ablage"){
    if(!codeStimmt(req)){ jsonAntwort(res, 403, { fehler: "Code stimmt nicht" }); return; }

    if(req.method === "GET"){
      if(ablage.daten === null){ jsonAntwort(res, 404, { fehler: "Ablage ist leer" }); return; }
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
      res.end(ablage.daten);
      return;
    }

    if(req.method === "DELETE"){
      ablage = { daten: null, geraet: "", zeit: "" };
      console.log("  Ablage geleert");
      jsonAntwort(res, 200, { ok: true });
      return;
    }

    if(req.method === "POST"){
      const teile = [];
      let menge = 0;
      req.on("data", function(t){
        menge += t.length;
        if(menge > MAX_BYTES){ jsonAntwort(res, 413, { fehler: "Datenmenge passt nicht" }); req.destroy(); return; }
        teile.push(t);
      });
      req.on("end", function(){
        if(res.writableEnded) return;
        const roh = Buffer.concat(teile);
        let geprueft;
        try{
          geprueft = JSON.parse(roh.toString("utf8"));
          if(!Array.isArray(geprueft.classes)) throw new Error();
        }catch(e){
          jsonAntwort(res, 400, { fehler: "keine Klassenheft-Daten" });
          return;
        }
        ablage = { daten: roh, geraet: String(geprueft.geraet || "").slice(0, 60), zeit: jetzt() };
        console.log("  Daten abgelegt" + (ablage.geraet ? " von " + ablage.geraet : "") + " um " + ablage.zeit + ", " + geprueft.classes.length + " Klasse(n)");
        jsonAntwort(res, 200, { ok: true });
      });
      return;
    }

    jsonAntwort(res, 405, { fehler: "nicht erlaubt" });
    return;
  }

  if(req.method !== "GET"){ jsonAntwort(res, 405, { fehler: "nicht erlaubt" }); return; }
  statischAusliefern(req, res, pfad);
});

function starten(port, versuch){
  server.once("error", function(e){
    if(e.code === "EADDRINUSE" && versuch < 20){ starten(port + 1, versuch + 1); return; }
    console.log("  Start nicht möglich: " + e.message);
    process.exit(1);
  });
  server.listen(port, "0.0.0.0", function(){
    const adresse = lanAdresse();
    const strich = "=".repeat(58);
    console.log("");
    console.log(strich);
    console.log("  KLASSENHEFT ÜBERTRAGUNG LÄUFT");
    console.log(strich);
    console.log("");
    console.log("  1. Am Handy oder iPad diese Adresse im Browser eingeben:");
    console.log("");
    console.log("         http://" + adresse + ":" + port);
    console.log("");
    console.log("  2. Auf beiden Geräten unter Einstellungen diesen Code eingeben:");
    console.log("");
    console.log("         " + CODE);
    console.log("");
    console.log("  3. Am Gerät mit den neueren Einträgen auf");
    console.log("     »Daten hier ablegen« tippen, am anderen Gerät auf");
    console.log("     »Daten holen und zusammenführen«.");
    console.log("");
    console.log("  Am Rechner selbst: http://localhost:" + port);
    console.log("");
    console.log("  Beide Geräte müssen im selben WLAN sein.");
    console.log("  Fenster offen lassen. Beenden mit Strg und C.");
    console.log(strich);
    console.log("");
  });
}

if(!fs.existsSync(path.join(ORDNER, "index.html"))){
  console.log("index.html fehlt. Dieses Programm muss im selben Ordner liegen wie die App.");
  process.exit(1);
}

starten(Number(process.env.PORT) || PORT, 0);
