@echo off
REM Doppelklick startet die Klassenheft-Uebertragung unter Windows.
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  python uebertragung.py
  goto ende
)

where node >nul 2>nul
if %errorlevel%==0 (
  node uebertragung.js
  goto ende
)

echo.
echo   Auf diesem Rechner fehlt Python und Node.
echo   Python gibt es kostenlos ueber den Microsoft Store, Suchbegriff Python 3.
echo   Danach diese Datei erneut doppelklicken.
echo.
pause

:ende
