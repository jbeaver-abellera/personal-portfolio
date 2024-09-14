@echo off
docker build -t jbeaver1/my-portfolio:1.0 .
docker login
docker push jbeaver1/my-portfolio:1.0
pause
