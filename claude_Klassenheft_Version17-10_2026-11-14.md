# Klassenheft 17.10 – Datum der Leistung, Schularbeit ausbessern, Glas-Oberfläche

Stand: 14. November 2026, Grundlage: 17.9.8

## 1. Datum der Leistung

- In **Ganze Klasse bewerten** steht oben ein Feld **Datum der Leistung**, dazu die Kurzwahl *heute* und *gestern*. Es gilt für alle Zeilen der Runde. Zeilen, die schon stehen, ziehen beim Ändern mit.
- Dasselbe Feld steht in den Einzelmasken (Note, Einstufung, nicht mitgeschrieben). Ein schon getipptes Thema bleibt beim Datumswechsel stehen.
- Gespeichert wird weiter `TT.MM.` ohne Jahr, am Datenformat ändert sich nichts. Das Jahr für das Datumsfeld kommt aus dem laufenden Schuljahr.
- Liegt das Datum in einem anderen Semester als dem eingestellten, steht ein Hinweis dabei. Umgebucht wird nichts von selbst.
- Ein Eintrag mit einem Tag in der Vergangenheit wird in die zeitliche Folge einsortiert.

## 2. Eine eingetragene Arbeit ausbessern

- In der Auswertung einer Arbeit steht der Knopf **Punkte, Noten oder Datum ausbessern**. Er öffnet die Klassenliste mit allen Punkten, der Höchstpunktezahl und dem Datum der Arbeit.
- Punkte in der Zeile überschreiben: die Note wird neu berechnet und sofort gespeichert. Es wird der bestehende Eintrag ausgebessert, kein zweiter angelegt. Thema, Nummer, Gewicht und Semester des Eintrags bleiben.
- Ein Datumswechsel dort gilt für alle Einträge der Arbeit mit diesem Tag. Ein Nachschreibtermin mit anderem Tag bleibt.
- Derselbe Weg: in *Ganze Klasse bewerten* auf die Nummer einer Arbeit tippen, die schon Einträge hat.
- Eine bestehende Note wird nicht mit einem Tipp gelöscht oder durch *nicht mitgeschrieben* ersetzt; die App fragt nach.
- **Punkte der Reihe nach eintippen:** Eingabetaste und Tabulator springen ins nächste Punktefeld. Bisher ging nach jeder Zahl die Schreibmarke verloren.

## 3. Glas-Oberfläche

- „Freundlich“ und die Tafel-Leiste haben jetzt einen weichen farbigen Grund und durchscheinende Flächen mit Unschärfe: Kopfzeile (bleibt beim Scrollen oben), Dock, Kacheln, Hinweise. Listenzeilen bilden gemeinsame Karten.
- Alles ist reines CSS. Keine Bibliothek, keine Webschrift, nichts wird aus dem Internet nachgeladen. Die App bleibt rein lokal und läuft ohne Netz.
- Ältere Browser ohne Unschärfe und Geräte mit „Transparenz reduzieren“ bekommen feste Flächen. Amtlich-klar und der Ausdruck sind unverändert.

## Gefundene und behobene Fehler

Beide an 17.9.8 nachgestellt:

- **„Auswertung dieser Schularbeit ansehen“ in der Klassenbewertung tat nichts.** Der Reiterwechsel in die Statistik fehlte.
- **Doppelte Einträge:** Wer in der Klassenbewertung eine schon eingetragene Arbeit wählte und Punkte eintippte, legte für dieselbe Person einen zweiten Eintrag an. Jetzt wird die Arbeit zum Ausbessern geöffnet.
- Der farbige Grund wird nicht mitgedruckt.

## Geprüft

- Syntax, keine doppelten Funktions- oder Konstantennamen.
- Eigener Ablauf im Browser, 26 Prüfungen: Runde mit gestrigem Datum, Auswertung, Korrektur per Tastatur, zu viele Punkte, Nachtrag für Fehlende, Datum der ganzen Arbeit ändern, Einzelmaske. Alle grün.
- Gegenprobe früherer Fassungen, 12 Prüfungen: Leiste und Dock bleiben beim Scrollen stehen, „Automatisch“ in neun Größen, Zusammenführen behält Erscheinungsbild und Gerätenamen, Datum und ausgebesserte Punkte kommen beim Zusammenführen an, alter Datenstand lässt sich öffnen. Alle grün.
- Prüfläufe aus `Desktop/Bernd/Claude`, jeweils über 17.9.8 und 17.10 mit **identischem Ergebnis**:

| Prüflauf | 17.9.8 | 17.10 |
|---|---|---|
| `Quelle/test_klassenheft.js` | 136 von 136 | 136 von 136 |
| `Klassenheft_Tests_Pages.js` | 17 von 17 | 17 von 17 |
| `Klassenheft_Tests.js` (Stand Version 9) | 358 bestanden, 9 Abweichungen | gleich |
| `Klassenheft_Tests_Kompatibilitaet.js` (Stand Version 9) | 558 bestanden, 3 Abweichungen | gleich |
| `Klassenheft_Tests_Uebertragung.js` (Stand Version 9) | 44 bestanden, Rest Abweichungen | gleich |
| `Klassenheft_Tests_Bedienung.js`, `_Fassungswechsel.js` | brechen ab | brechen ab |

Die Abweichungen und Abbrüche stammen aus den Prüfläufen selbst: sie sind auf dem Stand von Version 9 und erwarten Texte und Abläufe, die es seit 17.x anders gibt. **Die zehn Prüfläufe der 17er-Fassungen (darunter `schuljahr.js`) liegen nicht im Ordner und sind nicht gelaufen.**

## Noch offen

- Am echten iPhone und iPad ansehen: Datumsfeld, Unschärfe, Dock über dem Home-Balken.
- Auf GitHub liegt derzeit 17.9.7. 17.10 enthält 17.9.8 mit.
- Die freie Ausgabe ist nicht mitgehoben.

## Für die CLAUDE.md

Design: *Seit 17.10 Glas-Oberfläche in „Freundlich“ und Tafel-Leiste, reines CSS ohne Bibliothek. Amtlich-klar bleibt unverändert.*
Gelernte Regeln: *Das Datum einer Leistung ist der Tag, an dem sie erbracht wurde, nicht der Tag des Eintragens.* und *Wer eine bestehende Arbeit öffnet, bessert aus und legt nichts Zweites an.*
