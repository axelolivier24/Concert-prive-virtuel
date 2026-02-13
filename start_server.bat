@echo off
echo Starting local server with http-server...
echo Please ensure you have Node.js installed.
if not exist "node_modules\.bin\http-server.cmd" (
    echo Installing http-server...
    call npm init -y > nul
    call npm install http-server --save-dev > nul
)
echo Server is launching! Your browser should open automatically.
echo If not, open http://localhost:8080/index.html manually.
call npx http-server . -o -c-1
