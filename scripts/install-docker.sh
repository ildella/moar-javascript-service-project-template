#!/bin/bash

set -euxo

sudo apt remove --purge docker docker.io runc
sudo apt autoremove --purge -Vy && sudo apt autoclean && sudo apt update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt install docker-ce docker-ce-cli containerd.io -Vy

# https://docs.docker.com/install/linux/linux-postinstall
sudo groupadd docker ||
sudo gpasswd -a "$USER" docker
sudo usermod -aG docker "$USER"
newgrp docker
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R

# echo "Please run 'docker login' now"
docker login

docker version

