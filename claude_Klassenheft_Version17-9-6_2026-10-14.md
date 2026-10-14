# Klassenheft 17.9.6 – Tafel-Leiste und Einstellungen je Gerät

Stand: 14. Oktober 2026, Grundlage: 17.9.5

## Was neu ist

- **Drittes Erscheinungsbild „Tafel-Leiste“** (Layout-Vorschlag C). Die drei Reiter sitzen als große Knöpfe in einer dunklen Leiste am linken Rand, der Inhalt steht mittig mit höchstens 920 px Breite. Der Gerätename steht unten in der Leiste.
- **„Automatisch“ ist die neue Vorgabe.** Ab 900 px Breite gilt die Tafel-Leiste, darunter „Freundlich“. iPhone und iPad hoch bekommen also „Freundlich“, iPad quer und der Rechner die Tafel-Leiste. Beim Drehen wechselt nur der Rahmen; ein halb ausgefülltes Feld bleibt stehen.
- **Auch bei ausdrücklicher Wahl braucht die Tafel-Leiste Platz:** Unter 700 px Breite wird sie zu „Freundlich“.
- **Erscheinungsbild, Schriftgröße und Gerätename gehören jetzt zum Gerät.** Sie liegen zusätzlich unter `klassenheft_geraet_v1` (frei: `klassenheft_frei_geraet_v1`). Nach jedem Laden und nach „Alles ersetzen“ werden sie wieder darübergelegt. Vorher hat „Alles ersetzen“ alle drei mit den Werten des anderen Geräts überschrieben. Beim Zusammenführen blieben sie schon bisher stehen.

## Umstieg

- Beim ersten Start mit 17.9.6 wird „Freundlich“ aus 17.9.5 zu „Automatisch“, weil es dort nur die Vorgabe war. Eine Wahl von „Amtlich-klar“ bleibt stehen. Schriftgröße und Gerätename werden übernommen.

## Was gleich bleibt

- Keine Rechnung, keine Note, kein Speicherschlüssel des Datenbestands verändert. Der Ausdruck bleibt schwarz-weiß.

## Geprüft

- Syntax, keine doppelten Funktions- oder Konstantennamen
- Im Browser: iPad quer (Tafel-Leiste), Drehen ins Hochformat (Freundlich ohne Neuaufbau), Handy mit gewählter Tafel-Leiste (Freundlich), „Alles ersetzen“ mit fremdem Stil, Gerätenamen und Schriftgröße (eigene Werte bleiben), Datenbestand von außen überschrieben und neu geladen (eigene Werte bleiben), Umstieg von 17.9.5 mit Freundlich und mit Amtlich-klar. Keine Skriptfehler.
- **Noch offen:** die zehn Prüfläufe aus dem Desktop-Ordner, dann am echten iPad quer und hoch ansehen.

## Für die CLAUDE.md

Design: *Seit 17.9.6 drei Erscheinungsbilder plus „Automatisch“ (Vorgabe): unter 900 px Freundlich, darüber Tafel-Leiste. Amtlich-klar bleibt wählbar.*
Gelernte Regel: *Was zum Gerät gehört, gehört nicht in den Datenbestand. Erscheinungsbild, Schriftgröße und Gerätename liegen unter einem eigenen Schlüssel und überstehen „Alles ersetzen“.*
