#! /bin/bash

set -euxo

INSTALL_PARENT="$HOME"/apps
cd "$INSTALL_PARENT" || exit

baseUrl=https://github.com/grafana/k6/releases
version=0.37.0
filename=k6-v"$version"-linux-amd64
file=$filename.tar.gz

wget $baseUrl/download/v$version/$file
tar xvfz $file

sudo rm -f /usr/local/bin/k6
sudo ln -s "$INSTALL_PARENT"/$filename/k6 /usr/local/bin/k6
rm $file

k6 version
