#!/bin/bash

(cd /var/www/html/frontend && npm install --force && npm start &)
sudo systemctl enable node-project
sudo systemctl start node-project
sudo systemctl restart apache2
