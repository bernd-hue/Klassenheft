# Selbst ändern, ohne Daten zu verlieren

Für Klassenheft ab Version 13. Diese Anleitung setzt keine Programmierkenntnisse voraus.

## Das Wichtigste zuerst: gehen die Schülerdaten verloren?

Nein, solange die App am selben Ort bleibt.

Die Noten liegen **nicht in der Programmdatei**, sondern in einem eigenen Speicher des Browsers. Die Datei ist nur das Programm. Du kannst sie also austauschen, umbenennen oder verändern, die Daten bleiben liegen und werden von der neuen Fassung genauso gefunden.

Geprüft, jeweils mit vorhandenen Daten:

| Was du machst | Daten danach |
|---|---|
| Datei bearbeiten und speichern | bleiben |
| Datei durch eine neue Fassung ersetzen | bleiben |
| Datei umbenennen oder verschieben | bleiben |
| App über eine Webadresse öffnen statt über die Datei | **eigener Speicher, zunächst leer** |
| Browserdaten oder Verlauf löschen | **weg** |
| Anderes Gerät, anderer Browser | **eigener Speicher** |

Die entscheidende Grenze verläuft also nicht zwischen alter und neuer Programmfassung, sondern zwischen **Datei** und **Webadresse**. Öffnest du die App künftig über eine Adresse, etwa weil du sie am Homescreen installierst, ist das für den Browser eine andere Umgebung. Dann einmal am alten Weg auf *Jetzt sichern* tippen und am neuen Weg auf *Sicherung zusammenführen*. Danach hast du beide Stände beisammen.

## Das Netz darunter

Die App passt selbst auf:

- Sobald du eine Fassung mit einer neuen Nummer öffnest, legt sie vorher automatisch eine **Sicherheitskopie** im Gerät an. Sie steht unter *Einstellungen* ganz unten und lässt sich mit einem Tipp zurückholen. Zurückholen führt zusammen, es überschreibt nichts. Porträtfotos sind aus Platzgründen nicht in der Kopie.
- Vor *Alles ersetzen* legt sie ebenfalls eine Kopie an.
- Dazu kommt die Wochensicherung als Word- und JSON-Datei.

Trotzdem die Gewohnheit: **vor jeder Bastelei einmal auf *Jetzt sichern* tippen.** Das dauert fünf Sekunden und die JSON-Datei bringt jeden Stand zurück.

## Was du ganz ohne Code ändern kannst

Das meiste geht direkt in der App unter *Einstellungen*, Fach auswählen:

| Wunsch | Wo |
|---|---|
| Andere Gewichtung | Regler unter *Gewichtung*, je Kategorie |
| Gewichtung nur für eine einzelne Note | Regler direkt beim Eintragen der Note |
| Umstellen zwischen Faktor und Prozent | Chips unter *Gewichtung* |
| Eine Beurteilungsart mehr, etwa Referat oder Lernzielkontrolle | *Eigene Beurteilungen*, Name eintippen, Farbe wählen, anlegen |
| Eine Beurteilung umbenennen oder umfärben | *Eigene Beurteilungen*, direkt im Namensfeld bzw. auf einen Farbpunkt tippen. **Die eingetragenen Noten bleiben dabei erhalten** |
| Kategorien ein- und ausschalten | Häkchen unter *Kategorien* |
| Kompetenzenliste ändern | *Kompetenzen* |
| Notenschlüssel-Stufe der Klasse | *Notenschlüssel* |
| Schriftgröße | *Einstellungen*, Abschnitt *Darstellung* |
| Eine Kategorie soll nicht in die Note zählen | *Einstellungen*, Fach, Abschnitt *Benotet oder nur vermerkt*, auf *ohne Note* |
| Mitarbeit oder Hausübung sollen die Note verbessern können | derselbe Abschnitt, Wirkung auf *Bonus* |
| Der Bonus soll stärker oder schwächer wirken | derselbe Abschnitt, Regler *Bonus höchstens*, 0,25 bis 1,0 Notenstufen |
| Mitarbeit oder Hausübung sollen wie eine Note zählen | derselbe Abschnitt, Wirkung auf *eigener Anteil* |
| Kompetenz-Check ohne Note, mit Stufen zum Antippen | derselbe Abschnitt, beim Kompetenz-Check auf *ohne Note* |
| Andere Bezeichnungen für die Stufen | derselbe Abschnitt, unter der Kategorie auf *benennen*. Gilt je Fach, kostet keine Daten |
| Eine Stufe mehr oder weniger | dort auf *+ Stufe* bzw. *− Stufe*, zwischen zwei und fünf |
| Name und Schuljahr auf dem Ausdruck | *Einstellungen*, *Angaben für den Ausdruck* |

Wenn dein Wunsch in dieser Tabelle steht, brauchst du den Rest dieser Anleitung nicht.

## Was du im Code ändern kannst

Öffne `Klassenheft.html` mit **TextEdit** (rechte Maustaste, *Öffnen mit*). Wichtig: TextEdit muss die Datei als reinen Text behandeln. Falls stattdessen die App im Fenster erscheint, im Menü *Format* auf *In reinen Text umwandeln* gehen, oder gleich einen Editor wie **BBEdit** oder **Visual Studio Code** verwenden.

Ganz oben in der Datei steht ein Block mit der Überschrift **HIER DARFST DU GEFAHRLOS SELBST ÄNDERN**. Alles bis zur dicken Trennlinie **AB HIER BEGINNT DIE TECHNIK** ist zum Anpassen gedacht. Darunter besser nichts anfassen.

### Drei Regeln

1. Immer nur den Text **zwischen den Anführungszeichen** ändern, nie das Wort davor.
   Richtig: `schularbeit: "Schularbeit"` wird zu `schularbeit: "Schularbeit neu"`
   Falsch: `Schularbeit: "Schularbeit"`
2. Kommas, geschweifte Klammern und eckige Klammern stehen lassen.
3. Nach dem Ändern die **Fassungsnummer hochzählen** (`const APP_FASSUNG = "13";` wird zu `"14"`). Dann legt die App beim nächsten Start von selbst eine Sicherheitskopie an.

### Was wo steht

**Farben der Beurteilungen** (`CAT_COLORS`)
Je Kategorie zwei Werte: `fg` ist die kräftige Farbe für Text und Punkt, `bg` der helle Hintergrundton. Farbcodes sind die üblichen Sechserkombinationen mit Raute davor. Wenn du eine kräftige Farbe änderst, den hellen Ton dazu passend mitändern, sonst leidet die Lesbarkeit im Sonnenlicht.

**Bezeichnungen der Beurteilungen** (`CAT_LABELS` und `CAT_SHORT`)
`CAT_LABELS` ist der volle Name, `CAT_SHORT` die Kurzform für die schmalen Chips. Beide für dieselbe Kategorie ändern.

**Bewertungsvorlagen** (`SUBJECT_TEMPLATES`)
Hier liegen Allgemein, die drei Deutsch-Varianten, Mathematik und die beiden Nebenfach-Vorlagen. Eine eigene Vorlage anlegen geht am einfachsten, indem du eine bestehende kopierst und im Kopf einen neuen Namen vergibst. `mode` ist entweder `"prozent"` oder `"multiplikator"`, `cats` die verwendeten Kategorien, `weights` deren Gewichte.

**Notenschlüssel** (`DIKTAT_KEYS` und `PROZENT_KEYS`)
Je Zeile ein Paar: Grenzwert und Note. Bei `DIKTAT_KEYS` bedeutet `[5,1]`: bis fünf Fehler gibt es eine Eins. Bei `PROZENT_KEYS` bedeutet `[90,1]`: ab neunzig Prozent gibt es eine Eins. `stufe1` ist die erste Klasse, `ahs` das Leistungsniveau Standard AHS, `standard` das Niveau Standard.

**Stufen für Hausübung und Mitarbeit** (`STUFEN_LISTEN`)
Die Stufen von der besten zur schwächsten. Änderst du hier die Texte, gelten sie als **Vorgabe** für alle Fächer, in denen die Kategorie ohne Note läuft. Für ein einzelnes Fach brauchst du den Code nicht: dort geht es direkt in der App über *benennen*. Kategorien ohne eigenen Eintrag in dieser Liste, etwa der Kompetenz-Check, erben die Stufen der Hausübung. Daneben stehen drei zusammengehörige Listen, die dieselbe Reihenfolge haben müssen:

- `STUFEN_ZEICHEN` die Kurzzeichen (+, ~, −), die in der Sammelerfassung auf den Feldern stehen
- `STUFEN_WERTE` die Werte auf der Notenskala, falls du eine Kategorie auf *eigener Anteil* stellst
- `STUFEN_VORGABE` welche Kategorien in einem neuen Fach von Anfang an ohne Note laufen

**Bonus für die Mitarbeit** (`STUFEN_BONUS`, `BONUS_MAX_VORGABE`, `STUFEN_BONUS_VORGABE`)
In `STUFEN_BONUS` steht je Kategorie, um wie viel eine einzelne Einstufung den Notenschnitt verschiebt, in derselben Reihenfolge wie die Stufen. **Minus verbessert, Plus verschlechtert.** Die Werte werden zusammengezählt, nicht gemittelt, deshalb bringt mehr Mitarbeit auch mehr. `BONUS_MAX_VORGABE` ist die Obergrenze für neue Fächer, in bestehenden Fächern stellst du sie über den Regler ein. `STUFEN_BONUS_VORGABE` sagt, welche Kategorien in einem neuen Fach gleich als Bonus laufen; Vorgabe ist nur die Mitarbeit.

Halte die Einzelwerte klein. Bei 0,15 je Eintrag und einer Obergrenze von 0,5 braucht es vier gute Mitarbeiten für die volle Wirkung, das fühlt sich beim Eintragen richtig an. Werte über 0,3 machen die Obergrenze nach zwei Einträgen wirkungslos.

Wenn du `STUFEN_VORGABE` änderst, zähle zusätzlich `STUFEN_STAND` um eins hoch. Dann ziehen bestehende Fächer die neue Vorgabe genau einmal nach, ohne das zu überschreiben, was du in einem Fach von Hand eingestellt hast.

**Farben für eigene Beurteilungen** (`CUSTOM_COLORS`)
Die sechs Farbpunkte, die beim Anlegen einer eigenen Beurteilung zur Wahl stehen.

### Nach dem Ändern

1. Datei speichern, **am selben Ort und unter dem gleichen Namen**.
2. Im Browser die Seite neu laden. Falls die alte Fassung erscheint, mit gedrückter Umschalttaste neu laden, dann wird der Zwischenspeicher übergangen.
3. Kurz nachsehen, ob deine Klassen noch da sind. Falls nicht: *Einstellungen*, *Sicherheitskopie zurückholen*, oder die letzte JSON-Sicherung über *Sicherung zusammenführen* einspielen.

### Wenn nach dem Ändern gar nichts mehr geht

Das passiert praktisch immer durch ein fehlendes Komma oder eine fehlende Klammer. Kein Grund zur Sorge, die Daten sind davon nicht betroffen. Nimm einfach wieder die vorige Fassung der Datei, die im Projektordner mit Datum im Namen liegt, zum Beispiel `Klassenheft_v5_2026-08-28.html`. Benenne sie in `Klassenheft.html` um und alles ist wie vorher, samt aller Noten.

## Wenn du unsicher bist

Schreib mir, was du ändern möchtest. Meistens ist es schneller, wenn ich es einbaue und du bekommst eine fertige Datei, die du nur austauschen musst. Die Daten bleiben dabei genauso erhalten.
