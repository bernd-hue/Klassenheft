# Klassenheft 17.9.5 – Erscheinungsbild „Freundlich“

Stand: 14. Oktober 2026, Grundlage: 17.9.4 aus dem GitHub-Repository

## Was neu ist

- **Neues Erscheinungsbild „Freundlich“** (Layout-Vorschlag B), ab jetzt die Vorgabe: heller Grund, weiße Karten mit runden Ecken, farbige Avatare.
- **Startseite als Kacheln:** je Klasse und Fach eine Kachel mit Klassenmarke, Schnitt und Anzahl der Schüler:innen. Darunter „Zuletzt eingetragen“ mit den drei letzten Einträgen. Ein Tipp führt direkt zur Person im richtigen Fach.
- **Home, Statistik und Einstellungen als große Knöpfe** mit Symbol und Beschriftung, mindestens 72 px hoch. Bei „Freundlich“ als schwebendes Dock, bei „Amtlich-klar“ als breite Leiste. Jeder Reiter behält seine eigene Farbe.
- **Amtlich-klar bleibt wählbar:** Einstellungen › Darstellung › Erscheinungsbild. Wichtig bei direkter Sonne im Klassenzimmer.

## Was gleich bleibt

- Keine Rechnung, keine Note und kein Speicherschlüssel wurde verändert. Das Erscheinungsbild ist eine reine Darstellungseinstellung.
- Der Ausdruck bleibt schwarz-weiß wie bisher.
- Keine Webschrift: Die App lädt weiterhin nichts aus dem Internet nach und verwendet die Systemschrift des Geräts.
- Die neue Einstellung `stil` steht in `defaultSettings` und in `normaliseSettings`. Sie wandert also beim Übertragen mit und geht nach einem Neustart nicht verloren.

## Geänderte Dateien

- `index.html`: Fassung 17.9.5
- `sw.js`: Cache `klassenheft-v17-9-5`, damit Geräte die neue Fassung laden

## Geprüft

- Syntaxprüfung des gesamten Skripts, keine doppelten Funktionsnamen
- Im Browser mit Beispieldaten durchgeklickt: Startseite leer und befüllt, Klassenliste, Statistik, Einstellungen, Umschalten auf Amtlich-klar und zurück, Neuladen. Keine Skriptfehler.
- **Noch offen:** die zehn Prüfläufe aus dem Desktop-Ordner laufen lassen, die nicht im Repository liegen. Außerdem am echten iPhone und iPad ansehen, besonders das Dock über dem Home-Balken.

## Für die CLAUDE.md

Im Abschnitt Design ergänzen: *Seit 17.9.5 zwei Erscheinungsbilder. „Freundlich“ ist die Vorgabe mit Kacheln, Karten und schwebendem Dock. „Amtlich-klar“ bleibt wählbar für die Lesbarkeit in der Sonne. Die Reiter sind große Knöpfe mit Inline-SVG-Symbol.*
