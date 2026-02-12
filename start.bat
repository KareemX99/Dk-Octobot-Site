@echo off
title DK-OctoBot - Production Server
color 0A

echo ============================================
echo    DK-OctoBot - Starting Production Server
echo ============================================
echo.

cd /d "%~dp0"

:: Kill any existing processes on port 3061
echo Cleaning up old processes...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3061 " ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
timeout /t 2 /nobreak >nul
echo Done!
echo.

echo Starting Server on port 3061...
echo Site: https://octobot.it.com
echo Local: http://localhost:3061
echo.

set NODE_ENV=production
set PORT=3061
node dist/index.js

pause
