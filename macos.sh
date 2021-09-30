#!/bin/bash 

if which node > /dev/null 
    then 
        echo "Node installed, skipping node install process."
    else 
        curl -o node-v14.pkg https://nodejs.org/dist/v14.18.0/node-v14.18.0.pkg
        installer -pkg node-v14.pkg -target CurrentUserHomeDirectory
    fi 
npm i 
npm start