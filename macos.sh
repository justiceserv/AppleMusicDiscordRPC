#!/bin/bash 

if which node > /dev/null 
    then 
        echo "Node installed, skipping node install process."
    else 
        echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
        . ~/.bashrc
        mkdir ~/local
        mkdir ~/node-latest-install
        cd ~/node-latest-install
        curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
        ./configure --prefix=~/local
        make install # ok, fine, this step probably takes more than 30 seconds...
        curl https://www.npmjs.org/install.sh | sh
    fi 
npm i 
npm start