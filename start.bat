@echo off
cd /d %~dp0
python manage.py runserver
pause