# Klassenheft, Version 13

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

## Schnell benoten: die ganze Klasse in einem Durchgang

Der kürzeste Weg im Alltag führt über die Klassenliste, nicht über die einzelne Schüler:in.

1. Klasse und Fach öffnen.
2. Unten auf **Ganze Klasse bewerten**.
3. Oben einmal die Beurteilungsart wählen, zum Beispiel Schularbeit.
4. Dann je Zeile **ein einziger Tipp** auf die Note. Sie wird sofort gespeichert.

Ein zweiter Tipp in derselben Zeile bessert aus, es entsteht kein doppelter Eintrag. Das Kreuz rechts entfernt den gerade gemachten Eintrag wieder. Unten steht mit, wie viele Einträge du in diesem Durchgang gesetzt hast.

Die Gewichtung gilt für den ganzen Durchgang und steht oben, änderbar mit einem Tipp auf *ändern*. Die App merkt sich die zuletzt gewählte Beurteilungsart.

**Punkte statt Noten.** Bei Schularbeiten und allen Beurteilungen mit Notenschlüssel gibt es oben das Feld **Punkte gesamt**. Trägst du dort zum Beispiel 40 ein, wechselt jede Zeile auf ein Punktefeld. Du tippst nur noch die erreichten Punkte ein, die App rechnet die Note aus dem Leistungsniveau der jeweiligen Person und merkt sich die Grundlage, also etwa "33 von 40 Punkten, 82,5 %". Lässt du das Feld leer, bleibt es bei den Notenfeldern zum Antippen.

**Wer gefehlt hat** bekommt das graue Feld ganz rechts in seiner Zeile.

Für eine einzelne Note gibt es weiterhin den Weg über die Schüler:in. Diese Maske ist jetzt schlanker: Beurteilungsart, die fünf Notenfelder, Speichern. Der Rechner für Punkte und Prozent sowie die Gewichtung stehen darunter und stören den kurzen Weg nicht mehr.

## Die Schüleransicht

Ganz oben steht die **allgemeine Leistungstendenz**: der Notenschnitt groß, daneben die Note in Worten und ein Pfeil, wohin sich die Leistung bewegt. Der Pfeil erscheint ab vier Noten, darunter wäre er Zufall und die App sagt das auch.

Liegt der Schnitt genau dazwischen, steht das auch so da: *zwischen Befriedigend und Genügend*. Ein „eher Genügend" bei 3,5 würde eine Entscheidung behaupten, die die Zahl nicht hergibt.

Darunter der **Schnitt je Beurteilungsart** — Schularbeit 3,5, Test 2,5 und so fort. Die frühere Anzeige „Anzahl der Noten" ist entfallen, sie hat nichts gesagt.

Dann gleich die Knöpfe: **Leistung eintragen**, Notiz, Foto, Elternsprechtag-Blatt. Sie stehen jetzt oben, nicht mehr ganz unten, damit der häufigste Handgriff ohne Scrollen erreichbar ist.

### Namen ausbessern

Ein Tippfehler im Namen fällt oft erst Wochen später auf. Tippe in der Schüleransicht auf den Namen oder auf **ändern** daneben. Die Noten hängen nicht am Namen, sondern an der Person, das Umbenennen kostet also nichts.

### Datum ausbessern

Der Tag der Schularbeit ist selten der Tag, an dem du sie korrigierst und einträgst. Klapp die Einträge auf, tipp auf das **unterstrichene Datum** und trag den richtigen Tag ein, im Format TT.MM. Die App prüft die Eingabe und lehnt einen 32. Jänner ab.

### Was-wäre-wenn

Unter dem Verlauf steht ein Bereich zum Herzeigen. Tipp eine Beurteilungsart an, um sie **probeweise** aus der Rechnung zu nehmen, und du siehst sofort, was das mit der Note macht. Darunter steht ausgerechnet, welcher Schnitt herauskäme, wenn die Mitarbeit ab jetzt durchgehend die beste Stufe wäre — genau der Satz, den man einem Kind sagen will:

> Bei durchgehend bester Mitarbeit: Ø 2,9 statt Ø 3,5 jetzt.

**Es wird dabei nichts verändert und nichts gespeichert.** Der echte Notenschnitt bleibt, wie er ist. *Zurücksetzen* räumt die Vorschau wieder ab.

### Thema einer Leistung

In jeder Eingabemaske gibt es ein freiwilliges Feld **Thema**: Bruchrechnung, Gleichungen, Seite 42. Es steht danach beim Eintrag, auf dem Elternsprechtag-Blatt und in der Word-Sicherung. Leer lassen ist der Normalfall, dann steht dort wie bisher nur die Beurteilungsart.

In der Sammelerfassung gilt das Thema für die ganze Runde. Du kannst es auch nachtragen, wenn schon die halbe Klasse eingetragen ist — die bereits gesetzten Zeilen ziehen mit.

## Was benotet wird und was nicht

Hausübung und Mitarbeit sind in der App **keine Noten**. Sie werden in Stufen festgehalten:

| Kategorie | Stufen | Zeichen |
|---|---|---|
| Mitarbeit | sehr gute Mitarbeit · gute Mitarbeit · wenig Mitarbeit · keine Mitarbeit | ++ + ~ − |
| Hausübung | sehr gut gemacht · gut gemacht · gemacht · nicht gemacht | ++ + ~ − |
| Kompetenz-Check und alle anderen | wie die Hausübung, umbenennbar | ++ + ~ − |

**Alle Kategorien ohne Note haben dieselben vier Stufen und dieselben vier Zeichen.** Das ist Absicht: Die Felder liegen dann immer an derselben Stelle, egal welche Beurteilungsart offen ist, und du musst beim Eintragen nicht mehr hinsehen. Die vier Felder sind zusätzlich farblich abgestuft, von Grün über Oliv und Bernstein zu Rot.

Diese Einträge erscheinen im Verlauf, in der Statistik unter *Nur vermerkt, ohne Note*, auf dem Elternsprechtag-Blatt und in der Wochensicherung. Ein Tipp genügt, gespeichert wird sofort.

Weil es diese Einstufungen gibt, sind die früheren Knöpfe *Positiv* und *Negativ* entfallen. Die Notiz bleibt für alles, was in Worte gehört.

### Wo du das einstellst

*Einstellungen*, Fach auswählen, Abschnitt **Benotet oder nur vermerkt**. Dort stehen **alle** Beurteilungsarten, auch die, die in diesem Fach gerade nicht verwendet werden. Die sind abgeblendet und tragen den Vermerk *nicht in Verwendung* mit einem Knopf *einschalten* daneben.

Das ist wichtig zu wissen, weil der **Kompetenz-Check** nur in der Vorlage *Allgemein* von Haus aus dabei ist. In Mathematik, in allen drei Deutsch-Varianten und in den Nebenfach-Vorlagen musst du ihn erst einschalten, dann erscheinen seine Chips.

### Jede Kategorie darf ohne Note laufen

Das gilt nicht nur für Hausübung und Mitarbeit. **Jede** Kategorie lässt sich auf *ohne Note* stellen, auch der Kompetenz-Check, die Schularbeit, das Diktat oder eine selbst angelegte Beurteilung.

Beim **Kompetenz-Check** ist das besonders praktisch: Als Note bekommst du die Checkliste der Kompetenzen und daraus eine Ziffer. Auf *ohne Note* gestellt, bekommst du stattdessen vier Stufen zum Antippen — sehr gut gemacht, gut gemacht, gemacht, nicht gemacht — und ein Tipp genügt. Umschalten kannst du jederzeit, die bereits eingetragenen Daten bleiben in beiden Richtungen erhalten.

### Die Stufen selbst benennen

Die Vorgabetexte passen nicht überall. Deshalb steht in den Fach-Einstellungen unter jeder Kategorie ohne Note der Knopf **benennen**.

Dort tippst du jede Stufe selbst ein, von der besten zur schwächsten, und kannst mit **+ Stufe** und **− Stufe** zwischen zwei und fünf Stufen wählen. Für den Kompetenz-Check zum Beispiel: *vollständig erreicht · überwiegend erreicht · teilweise erreicht · noch nicht erreicht*.

Drei Dinge, die du wissen solltest:

- **Die Benennung gilt je Fach getrennt.** Deutsch in der 3A und Deutsch in der 4C können unterschiedliche Texte haben.
- **Umbenennen kostet keine Daten.** Die Einträge hängen an der Position der Stufe, nicht am Text. Ein bereits eingetragener Vermerk heißt danach einfach anders.
- **Ein leeres Feld holt die Vorgabe** für diese eine Stufe zurück, **Vorgabe zurückholen** stellt alle Texte wieder her.

Die Kurzzeichen passen sich der Anzahl an: bei zwei Stufen + −, bei drei + ~ −, bei vier ++ + ~ −, bei fünf ++ + ~ − −−. Ebenso die Farbabstufung.

### Du entscheidest, was in die Note einfließt

Unter *Einstellungen*, Fach auswählen, Abschnitt **Benotet oder nur vermerkt** steht bei jeder Kategorie zuerst *Note* oder *ohne Note*. Bei *ohne Note* wählst du darunter die **Wirkung auf den Notenschnitt**, drei Möglichkeiten:

| Wirkung | Was passiert |
|---|---|
| **keine** | Die Einträge werden nur vermerkt und bleiben aus der Rechnung heraus. |
| **Bonus** | Die Einstufungen werden zusammengezählt und verschieben den Notenschnitt, insgesamt aber höchstens um die Obergrenze, die du darunter einstellst. |
| **eigener Anteil** | Die Kategorie bekommt feste Werte auf der Notenskala und einen eigenen Gewichtungsregler, zählt also wie eine Note. |

**Vorgabe ist bei der Mitarbeit *Bonus*, bei der Hausübung *keine*.**

### Wie der Bonus für die Mitarbeit rechnet

Der Grundgedanke: Wer mehr mitarbeitet, soll etwas davon haben. Die Mitarbeit darf aber nie über der Schularbeit stehen.

Deshalb zählt die App die Einstufungen zusammen, statt sie zu mitteln:

| Mitarbeit | Bonus je Eintrag |
|---|---|
| sehr gute Mitarbeit | −0,15 (verbessert) |
| gute Mitarbeit | −0,05 (verbessert ein wenig) |
| wenig Mitarbeit | +0,05 (verschlechtert ein wenig) |
| keine Mitarbeit | +0,15 (verschlechtert) |

Drei gute Mitarbeiten sind also besser als eine, sechs besser als drei. Nach oben ist trotzdem Schluss: Die Summe wird auf die Obergrenze gekappt, Vorgabe **0,5 Notenstufen**, einstellbar über den Regler *Bonus höchstens* zwischen 0,25 und 1,0.

Ein Beispiel: Zwei Schularbeiten mit Dreier ergeben den Schnitt 3,0. Mit dreimal sehr guter Mitarbeit werden daraus 2,55, mit sechsmal 2,50 und keinen Deut besser. Eine gekippte Note ist also möglich, ein Sprung vom Dreier auf den Einser nicht.

**Ohne Noten gibt es überhaupt keinen Schnitt und damit auch keinen Bonus.** Wer nur Mitarbeitseinträge hat und noch keine Schularbeit, hat weiterhin keinen Notenschnitt, egal wie fleißig. Das war vorher anders und ist der wichtigste Unterschied zur Einstellung *eigener Anteil*: Die trägt, solange sonst nichts eingetragen ist, allein den ganzen Anteil, und dann bestimmt eine einzige Mitarbeit die Note. Wenn du das nicht möchtest, nimm Bonus.

### Wo der Bonus sichtbar ist

- In der Schüleransicht steht unter dem Notenschnitt, wie er zustande kommt, zum Beispiel `2,7 − 0,45 Bonus`, und neben der Mitarbeit ein Merkzeichen `Bonus −0,45`.
- Im Notenverlauf sind es zwei Linien: lange Striche für den Schnitt der Noten, kurze Striche für den Wert mit Bonus, darunter ein Satz, der beide benennt.
- Auf dem Elternsprechtag-Blatt und in der Word-Sicherung steht derselbe Satz ausgeschrieben, samt Hinweis, wenn die Obergrenze erreicht wurde.

Auf *eigener Anteil* gestellt, bekommen die Stufen stattdessen feste Werte auf der Notenskala:

- Mitarbeit: sehr gute = 1, gute = 2, wenig = 3, keine = 5
- Hausübung: sehr gut gemacht = 1, gut gemacht = 2, gemacht = 3, nicht gemacht = 5

Das gilt für **jede** Kategorie, auch für Schularbeit, Diktat oder eine selbst angelegte Beurteilung. Du kannst also jede davon auf *ohne Note* stellen oder umgekehrt eine Einstufung mitzählen lassen. Die Einstellung gilt je Fach getrennt.

Ganz oben in den Einstellungen eines Fachs steht unter **Was in die Note einfließt** immer der aktuelle Stand im Klartext: welche Kategorien zählen, welche als Bonus wirken und mit welcher Obergrenze, und welche nur vermerkt werden.

Alle Texte in der App richten sich danach. Es wird nirgends behauptet, etwas werde nicht benotet, wenn du es doch mitzählen lässt.

Fächer, in denen aus einer früheren Fassung schon Noten in Mitarbeit oder Hausübung liegen, bleiben unverändert bei Noten, damit sich kein bereits angezeigter Notenschnitt rückwirkend ändert. Ebenso bleibt ein Fach, in dem du die Mitarbeit ausdrücklich auf *zählt mit* gestellt hast, genau dort stehen. Den Bonus bekommt nur, wo die Mitarbeit bisher gar keine Wirkung hatte.

## Nicht mitgeschrieben

Wer bei einer Schularbeit gefehlt hat, bekommt keine Note und auch keine Lücke. In der Notenvergabe steht unter dem Speichern-Knopf **nicht mitgeschrieben, keine Note**, in der Sammelerfassung ist es das graue Feld ganz rechts in der Zeile. Der Vermerk steht im Verlauf und auf dem Elternsprechtag-Blatt, geht aber in keine Berechnung ein.

## Ruhige Schüleransicht

Ganz oben stehen Notenschnitt, Anzahl der Noten, der Notenverlauf und die Zusammenfassung von Mitarbeit und Hausübung. Die vollständige Liste aller Einträge liegt hinter dem Knopf **Einzelne Einträge anzeigen**, damit die Ansicht auf den ersten Blick übersichtlich bleibt.

## Grafischer Verlauf

In der Schüleransicht steht über den Noten ein **Notenverlauf**: die Noten in zeitlicher Folge, oben die Eins, unten die Fünf, die lang strichlierte Linie ist der Schnitt der Noten, eine fein gepunktete Linie kommt dazu, sobald ein Bonus wirkt. Er erscheint, sobald mindestens zwei Noten vorliegen, und steht genauso auf dem Elternsprechtag-Blatt.

In der Statistik gibt es zusätzlich die **Verteilung der Noten** für die ganze Klasse, also wie oft welche Note vergeben wurde. Auch sie ist auf der Klassenübersicht mit ausgedruckt.

## Erstes und zweites Semester

Über der Klassenliste steht eine Leiste mit *1. Semester*, *2. Semester* und *Ganzes Jahr*. Sie entscheidet alles auf einmal:

- welche Noten und Einträge angezeigt werden
- welcher Notenschnitt gerechnet wird
- in welchen Zeitraum eine neu eingetragene Note fällt
- welchen Zeitraum das Elternsprechtag-Blatt zeigt

Steht die Leiste auf *Ganzes Jahr*, landet eine neue Note automatisch im Semester, das zum heutigen Datum passt. September bis Jänner ist das erste, Februar bis Juli das zweite Semester.

Bestehende Einträge aus der Zeit vor dieser Version wurden anhand ihres Datums einmalig zugeordnet. Auf dem Elternsprechtag-Blatt und in der Wochensicherung stehen immer beide Semesterschnitte und der Jahresschnitt nebeneinander.

Ein Hinweis dazu, falls es beim Elternsprechtag Nachfragen gibt: Im Modus *Anteil in Prozent* wird der Jahreswert aus den Anteilen des ganzen Jahres neu gerechnet, er ist also nicht einfach der Mittelwert der beiden Semester. Ist eine Kategorie nur in einem Semester besetzt, trägt sie dort den vollen Anteil, über das Jahr aber nur ihren eigenen. Der Jahreswert kann dadurch knapp neben den beiden Semesterwerten liegen. Das ist rechnerisch richtig und liegt am Prozentmodell selbst. Im Modus *Faktor je Note* liegt der Jahreswert dagegen immer zwischen den beiden Semesterwerten.

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
