# Klassenheft 17.9.7 – Reiterleiste bleibt beim Scrollen stehen

Stand: 14. Oktober 2026, Grundlage: 17.9.6

## Fehler

Auf breiten Bildschirmen (ab 560 px) wanderten die Reiter beim Scrollen mit dem Inhalt weg.
- **Tafel-Leiste:** Die grüne Leiste fuhr nach oben aus dem Bild.
- **Freundlich am iPad hoch:** Das Dock stand erst ganz unten am Seitenende statt am Bildschirmrand.
- **Amtlich-klar am iPad und Rechner:** Dasselbe, schon seit den Fassungen davor.

Ursache: Der Rahmen um die App hatte `overflow:hidden`. Damit wird er zu einem eigenen Scrollbereich, und eine klebende Leiste klebt an ihm statt am Bildschirm.

## Behebung

- Der Rahmen schneidet jetzt mit `overflow:clip` ab. Das erzeugt keinen eigenen Scrollbereich. Ältere Browser ohne `clip` behalten `hidden`.
- Die Tafel-Leiste ist fest am linken Bildschirmrand verankert (`position:fixed`), der Inhalt rückt um ihre Breite nach rechts.

## Geprüft

Nach dem Scrollen an das Seitenende im Browser nachgemessen:
- Tafel-Leiste bei 1180 × 820 bleibt oben bei 0, auch mit großer Schrift.
- Dock bei 820 × 1180 sitzt von Anfang an am unteren Bildschirmrand.
- Handy bei 390 × 844 unverändert.
- Amtlich-klar bei 1180 × 820 bleibt unten.

Keine Skriptfehler. **Noch offen:** die zehn Prüfläufe aus dem Desktop-Ordner.

## Für die CLAUDE.md

Gelernte Regel: *Ein Rahmen mit `overflow:hidden` hält jede klebende Leiste in sich fest. Wer sie am Bildschirm halten will, schneidet mit `clip` ab oder verankert sie fest.*
