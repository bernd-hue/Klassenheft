# Klassenheft, Version 5

Kurzanleitung zum Installieren, Übertragen und Verteilen. Stand 28.08.2026.

Wie du selbst etwas änderst, ohne Daten zu verlieren, steht in `Bastelanleitung.md` daneben.

## Was in diesem Ordner liegt

| Datei | Wofür |
|---|---|
| `index.html` | die App selbst, der gesamte Programmcode steckt in dieser einen Datei |
| `manifest.webmanifest` | sagt dem Gerät, wie die App am Homescreen heißen und aussehen soll |
| `sw.js` | sorgt dafür, dass die App auch ohne Internet startet |
| `icon-192.png`, `icon-512.png`, `icon-180.png` | das Symbol am Homescreen |
| `Klassenheft_Uebertragung.command` | Doppelklick am Mac, startet die Übertragung im WLAN |
| `Klassenheft_Uebertragung.bat` | dasselbe unter Windows |
| `uebertragung.py`, `uebertragung.js` | das eigentliche Übertragungsprogramm, einmal für Python, einmal für Node |
| `Bastelanleitung.md` | wie du Gewichtung, Beurteilungen, Farben und Notenschlüssel selbst änderst |

Die Dateien gehören zusammen und müssen im selben Ordner bleiben.

## Schnell ausprobieren

`index.html` doppelklicken. Die App läuft sofort im Browser, alle Daten bleiben lokal. Für einen ersten Test reicht das.

## Als richtige App mit Symbol am Homescreen

Damit ein Gerät die App wie eine installierte App behandelt, muss sie über eine Web-Adresse erreichbar sein. Das ist der einzige Weg, den iPhone, iPad und Android dafür anbieten. Die Daten bleiben trotzdem ausschließlich auf dem Gerät.

1. Den ganzen Ordner auf eine Webadresse legen, zum Beispiel GitHub Pages.
2. Die Adresse am Gerät im Browser öffnen.
3. **iPhone und iPad:** Teilen-Symbol, dann *Zum Home-Bildschirm*.
   **Android:** Menü, dann *App installieren*.
   **Mac, Windows:** in Chrome oder Edge das Installationssymbol rechts in der Adresszeile.
4. Ab jetzt startet die App mit einem Klick, ohne Adresszeile und ohne Browserrahmen.

## Erstes und zweites Semester

Über der Klassenliste steht eine Leiste mit *1. Semester*, *2. Semester* und *Ganzes Jahr*. Sie entscheidet alles auf einmal:

- welche Noten und Einträge angezeigt werden
- welcher Notenschnitt gerechnet wird
- in welchen Zeitraum eine neu eingetragene Note fällt
- welchen Zeitraum das Elternsprechtag-Blatt zeigt

Steht die Leiste auf *Ganzes Jahr*, landet eine neue Note automatisch im Semester, das zum heutigen Datum passt. September bis Jänner ist das erste, Februar bis Juli das zweite Semester.

Bestehende Einträge aus der Zeit vor dieser Version wurden anhand ihres Datums einmalig zugeordnet. Auf dem Elternsprechtag-Blatt und in der Wochensicherung stehen immer beide Semesterschnitte und der Jahresschnitt nebeneinander.

## Neue Fassung einspielen

Die Noten liegen nicht in der Programmdatei, sondern im Speicher des Browsers. Eine neue Fassung einzuspielen heißt deshalb nur: die Datei `index.html` bzw. `Klassenheft.html` austauschen. Die Daten bleiben, wo sie sind, und werden von der neuen Fassung wiedergefunden.

Wichtig ist allein, dass die App am selben Ort bleibt. Ein Wechsel von der Datei auf eine Webadresse ist für den Browser eine andere Umgebung, dort ist zunächst nichts da. In dem Fall am alten Weg auf *Jetzt sichern* tippen und am neuen auf *Sicherung zusammenführen*.

Zusätzlich legt die App bei jeder neuen Fassungsnummer von selbst eine Sicherheitskopie im Gerät an. Sie steht unter *Einstellungen* ganz unten und lässt sich mit einem Tipp zurückholen.

## Wochensicherung

Die App erinnert nach sieben Tagen mit einem gelben Balken. Ein Tipp auf *Jetzt sichern* erzeugt zwei Dateien:

- `Klassenheft_Sicherung_JJJJ-MM-TT.docx` zum Nachlesen, Ausdrucken und Weiterverwenden in Word, nach Semestern gegliedert
- `Klassenheft_Sicherung_JJJJ-MM-TT.json` zum Zurückspielen in die App

Am Mac und in Windows lässt sich unter *Einstellungen* einmalig ein fester Sicherungsordner wählen. Ab dann landet die Sicherung automatisch dort. Am iPad und am Handy landet sie in der Dateien-App bzw. bei den Downloads.

## Handy und Rechner zusammenführen

Es gibt zwei Wege. Beide gehen ohne Cloud und ohne Internet.

### Weg 1: direkt im WLAN, ohne Datei

1. Am Rechner `Klassenheft_Uebertragung.command` doppelklicken (unter Windows die `.bat`-Datei). Es öffnet sich ein Fenster mit einer Adresse und einem vierstelligen Zahlencode. **Das Fenster offen lassen.**
2. Am Handy oder iPad die angezeigte Adresse im Browser eingeben, zum Beispiel `http://192.168.0.31:8787`. Die App öffnet sich dort.
3. Auf beiden Geräten unter *Einstellungen* den Zahlencode eintippen.
4. Am Gerät mit den neueren Einträgen auf *Daten hier ablegen* tippen.
5. Am anderen Gerät auf *Daten holen und zusammenführen* tippen.
6. Fertig. Das Fenster am Rechner kann geschlossen werden, damit ist auch die Ablage gelöscht.

Beide Geräte müssen im selben WLAN sein. Der Abschnitt *Direktübertragung im WLAN* erscheint in den Einstellungen nur, wenn das Programm gerade läuft.

Falls beim ersten Doppelklick am Mac eine Warnung kommt: einmal mit der rechten Maustaste auf die Datei klicken und *Öffnen* wählen. Fehlt Python, sagt das Fenster, wie es nachinstalliert wird.

### Weg 2: über die Sicherungsdatei

1. Am Gerät mit den neueren Einträgen auf *Jetzt sichern* tippen.
2. Die JSON-Datei auf das andere Gerät bringen, per AirDrop, Netzwerkfreigabe, Kabel oder Mail.
3. Dort unter *Einstellungen* auf *Sicherung zusammenführen* tippen und die Datei wählen.

Bei beiden Wegen gilt: Es wird nichts gelöscht und nichts überschrieben. Fehlende Klassen, Namen, Fächer und Einträge kommen dazu, bei zwei Fassungen desselben Eintrags gewinnt die neuere. Der Vorgang lässt sich beliebig oft wiederholen, es entstehen keine Dubletten.

## Elternsprechtag

Unter *Statistik* ein Fach wählen. Dort gibt es *Klassenübersicht drucken* und *Alle Einzelblätter drucken*. Ein einzelnes Blatt gibt es auch direkt bei der Schüler:in über *Elternsprechtag-Blatt*. Im Druckdialog lässt sich das Blatt als PDF sichern und den Eltern mitgeben.

Damit im Kopf des Blattes der richtige Name steht, unter *Einstellungen* einmal *Lehrkraft* und *Schuljahr* eintragen.

## Datenschutz

Alle Daten liegen im lokalen Speicher des Browsers auf dem jeweiligen Gerät. Es gibt keinen Server im Internet, keine Cloud und keinen Austausch zwischen Lehrkräften. Der Service Worker speichert ausschließlich die Programmdateien zwischen, niemals Schülerdaten.

Das Übertragungsprogramm läuft nur, solange sein Fenster offen ist, es ist nur im eigenen WLAN erreichbar, es schreibt nichts auf die Festplatte und die Ablage ist durch den Zahlencode geschützt, der ausschließlich in diesem Fenster steht. Am sichersten ist es, das Fenster gleich nach der Übertragung zu schließen.

Wichtig für die Testphase: Jede Kolleg:in klärt selbst kurz mit der Schulleitung ab, dass sie das Werkzeug mit echten Schülerdaten nutzt.

Ebenfalls wichtig: iOS räumt den lokalen Speicher von Web-Apps auf, die längere Zeit nicht geöffnet werden. Die Wochensicherung ist deshalb kein Luxus, sondern der eigentliche Schutz vor Datenverlust.
