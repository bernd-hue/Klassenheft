# Klassenheft auf iPhone und MacBook installieren

Schritt für Schritt. Rechne mit etwa fünfzehn Minuten. Stand 28.08.2026, Version 5.

---

## Warum es nicht ohne Internetadresse geht

iPhone und iPad legen nur dann ein eigenes App-Symbol auf den Homescreen, wenn die App über eine Webadresse erreichbar ist. Das ist eine Vorgabe von Apple, daran führt kein Weg vorbei.

Das heißt **nicht**, dass deine Daten ins Internet wandern. Auf der Adresse liegt nur das Programm. Die Noten bleiben im Speicher des jeweiligen Geräts, genau wie bisher. Auf der Adresse ist nichts von deinen Schülern zu sehen, auch nicht für jemanden, der die Adresse kennt.

---

## Schritt 1: Die App ins Netz stellen

Du hast bereits eine Adresse: **bernd-hue.github.io/Klassenheft**. Dort liegt noch die alte Fassung mit dem PIN-Login. Die wird jetzt ersetzt.

1. Am MacBook **github.com/bernd-hue/Klassenheft** öffnen und anmelden.
2. Oben auf **Add file**, dann **Upload files**.
3. Im Finder den Ordner **Klassenheft_App** öffnen (liegt auf dem Schreibtisch unter `Bernd/Claude/`).
4. Dort alle Dateien markieren, mit **Cmd + A**, und mit der Maus in das GitHub-Fenster ziehen.
5. Unten ins Textfeld **Version 5** schreiben und auf **Commit changes** klicken.
6. Ein bis zwei Minuten warten. GitHub braucht kurz, bis die neue Fassung ausgeliefert wird.

Fertig. Die alten Dateien mit gleichem Namen werden dabei überschrieben, das ist so gewollt.

---

## Schritt 2: Nachsehen, ob die neue Fassung da ist

Am MacBook **bernd-hue.github.io/Klassenheft** aufrufen.

Richtig ist es, wenn du unten drei Reiter siehst: **Home**, **Statistik**, **Einstellungen**, und unter Einstellungen ganz unten **Klassenheft, Version 5** steht.

Erscheint noch die alte Fassung mit der PIN-Abfrage, dann liegt sie noch im Zwischenspeicher des Browsers:

1. Zuerst die Seite mit **Umschalt + Neu laden** aufrufen.
2. Hilft das nicht: in Chrome auf das Schloss-Symbol links in der Adresszeile, dann **Cookies und Websitedaten**, dann **Daten löschen**. Danach neu laden.

**Wichtig:** Diesen zweiten Schritt nur jetzt machen, bevor du eigene Daten eingibst. Später würde er deine Noten mitlöschen.

---

## Schritt 3: Am MacBook installieren

Nimm dafür **Chrome**.

1. **bernd-hue.github.io/Klassenheft** öffnen.
2. Rechts in der Adresszeile erscheint ein kleines Symbol zum Installieren, ein Bildschirm mit einem Pfeil nach unten. Darauf klicken, dann **Installieren**.
3. Klassenheft öffnet sich jetzt in einem eigenen Fenster, ohne Adresszeile, und liegt im Launchpad und im Dock.

Falls das Symbol nicht auftaucht: in Chrome oben rechts auf die drei Punkte, dann **Speichern und teilen**, dann **Verknüpfung erstellen** bzw. **Seite als App installieren**.

Ein Hinweis zu Safari am Mac: Safari legt für eine so installierte App einen eigenen, getrennten Datenspeicher an. Wenn du sowohl in Safari als auch in der installierten App arbeitest, hast du zwei getrennte Stände. Deshalb am Mac bei Chrome bleiben, dort ist es ein gemeinsamer Speicher.

---

## Schritt 4: Am iPhone installieren

Nimm dafür **Safari**, nicht Chrome. Nur Safari kann am iPhone ein echtes App-Symbol anlegen.

1. In Safari **bernd-hue.github.io/Klassenheft** öffnen.
2. Unten auf das **Teilen-Symbol**, das Quadrat mit dem Pfeil nach oben.
3. In der Liste nach unten wischen bis **Zum Home-Bildschirm**, darauf tippen.
4. Oben steht **Klassenheft**, rechts auf **Hinzufügen**.
5. Das Symbol liegt jetzt am Homescreen und öffnet sich mit einem Tipp.

### Das Wichtigste am iPhone

**Ab jetzt nur noch über das Symbol am Homescreen arbeiten, nie mehr über Safari.**

Das iPhone behandelt die installierte App und Safari als zwei getrennte Umgebungen mit getrennten Daten. Wenn du Noten in Safari einträgst, tauchen sie in der App nicht auf, und umgekehrt. Das verwirrt und lässt sich nachträglich nur über eine Sicherung wieder zusammenführen.

Also: installieren, Safari zumachen, und danach immer das Symbol antippen.

---

## Schritt 5: Einrichten und erster Test

Am besten am MacBook, das tippt sich leichter.

1. Unter **Einstellungen**, Abschnitt **Angaben für den Ausdruck**, deinen Namen und das Schuljahr eintragen. Das erscheint später im Kopf der Elternsprechtag-Blätter.
2. Unter **Name dieses Geräts** etwas Eindeutiges eintragen, zum Beispiel `MacBook`. Am iPhone dann `iPhone`. Das hilft beim Zusammenführen, damit du weißt, woher die Daten kommen.
3. Unter **Wochensicherung** einmal auf **Sicherungsordner wählen** und einen Ordner festlegen, zum Beispiel `Bernd/Claude/Sicherungen`. Ab dann landet die Wochensicherung automatisch dort.
4. Unter **Darstellung** die Schriftgröße wählen, die dir taugt. Am iPhone später eigene Wahl, die Einstellung gilt je Gerät.
5. Oben eine Klasse mit einem Fach anlegen, zwei Namen eintragen, eine Note vergeben. Dann unter **Statistik** das Fach öffnen und einmal **Alle Einzelblätter drucken** ausprobieren, damit du siehst, wie das Blatt aussieht.
6. Zum Schluss auf **Jetzt sichern** tippen. Dann weißt du, dass der Weg funktioniert, bevor es ernst wird.

---

## Schritt 6: iPhone und MacBook zusammenbringen

Erst dann sinnvoll, wenn auf beiden Geräten schon etwas drin ist. Zwei Wege, beide ohne Cloud.

**Der bequeme Weg im WLAN:** Am MacBook im Ordner `Klassenheft_App` die Datei `Klassenheft_Uebertragung.command` doppelklicken. Es öffnet sich ein Fenster mit einer Adresse und einem vierstelligen Code. Am iPhone diese Adresse in Safari eingeben, auf beiden Geräten unter Einstellungen den Code eintippen, am Gerät mit den neueren Einträgen auf **Daten hier ablegen**, am anderen auf **Daten holen und zusammenführen**.

**Der Weg über eine Datei:** Am einen Gerät auf **Jetzt sichern**, die JSON-Datei per AirDrop aufs andere Gerät, dort **Sicherung zusammenführen**.

Bei beiden Wegen wird nichts überschrieben. Es kommt nur dazu, was fehlt.

---

## Wenn du später eine neue Fassung bekommst

Dann lade ich dir eine neue `index.html`, du lädst sie wie in Schritt 1 bei GitHub hoch, und öffnest die App auf beiden Geräten einmal neu. Die Noten bleiben, wo sie sind. Es ist kein Neuinstallieren nötig, das Symbol am Homescreen bleibt bestehen.

---

## Kurzfassung zum Abhaken

- [ ] Dateien bei GitHub hochgeladen
- [ ] Am MacBook geprüft, dass Version 5 erscheint
- [ ] Am MacBook in Chrome installiert
- [ ] Am iPhone in Safari zum Home-Bildschirm hinzugefügt
- [ ] Am iPhone ab jetzt nur noch das Symbol verwenden
- [ ] Name, Schuljahr, Gerätename und Sicherungsordner eingetragen
- [ ] Einmal Probe gedruckt und einmal gesichert
