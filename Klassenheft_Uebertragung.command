#!/bin/sh
# Doppelklick startet die Klassenheft-Übertragung.
# Das Fenster muss offen bleiben, solange übertragen wird.

cd "$(dirname "$0")" || exit 1

if command -v python3 >/dev/null 2>&1; then
  exec python3 uebertragung.py
fi

if command -v node >/dev/null 2>&1; then
  exec node uebertragung.js
fi

echo ""
echo "  Auf diesem Rechner fehlt Python 3 und Node."
echo ""
echo "  Am Mac gibt es Python 3 mit den Entwicklerwerkzeugen von Apple."
echo "  Dafür im Programm Terminal eingeben:"
echo ""
echo "      xcode-select --install"
echo ""
echo "  Danach dieses Programm erneut doppelklicken."
echo ""
printf "  Zum Beenden die Eingabetaste drücken. "
read _dummy
