#!/bin/bash
sudo killall node
sudo mv /var/www/html/frontend /var/www/html/$(date +%s%N)
sudo mkdir /var/www/html/frontend
sudo chmod -R 775 /var/www/html/frontend
sudo chown -R ubuntu:www-data /var/www/html/frontend
#sudo rm -r /home/ubuntu/auxiliary
#mkdir /home/ubuntu/auxiliary

sudo systemctl restart apache2 
sudo systemctl reload apache2

