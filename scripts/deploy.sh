#!/bin/bash
sudo mv /var/www/html/frontend /var/www/html/$(date +%s%N)
sudo mkdir /var/www/html/frontend
sudo chmod -R 775 frontend/
sudo chown -R ubuntu:www-data frontend

sudo systemctl restart apache2 
