@echo off
chcp 65001 >nul
title Le Mondrian - Serveur Statique Local

echo ======================================================
echo   LE MONDRIAN - RÉSIDENCE HÔTELIÈRE À SALY PORTUDAL
echo   Démarrage du site statique en local...
echo ======================================================
echo.

cd /d "%~dp0"

REM Vérification de la présence du dossier dist (sortie de npm run build)
if not exist "dist\index.html" (
    echo [ERREUR] Le dossier "dist" ou le fichier "dist\index.html" est introuvable.
    echo Veuillez d'abord compiler le projet avec npm run build.
    echo.
    pause
    exit /b 1
)

REM Vérification de Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [AVERTISSEMENT] Node.js n'a pas été détecté sur votre machine.
    echo Ouverture directe du fichier out\index.html dans votre navigateur...
    start "" "out\index.html"
    pause
    exit /b 0
)

REM Lancement du serveur Node.js qui ouvre automatiquement le navigateur
node serve.js
