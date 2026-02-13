@echo off
echo ========================================
echo   TAYC CONCERT VIRTUEL - LANCEUR
echo ========================================
echo.
echo Ce script va ouvrir le concert dans votre navigateur.
echo.
echo IMPORTANT: Si vous voyez des erreurs de "Tracking Prevention",
echo c'est normal et n'affecte pas le fonctionnement.
echo.
echo Appuyez sur une touche pour continuer...
pause > nul

echo.
echo Lancement du serveur local...
call start_server.bat

echo.
echo ========================================
echo Le concert devrait s'ouvrir dans votre navigateur.
echo.
echo ASTUCE: Pour une meilleure experience, utilisez:
echo - Chrome ou Firefox (moins de restrictions)
echo - Mode plein ecran (F11)
echo ========================================
echo.
pause
