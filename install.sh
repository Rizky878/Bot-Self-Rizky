#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i @adiwajshing/baileys@3.5.0
npm i axios
npm i node-fetch
npm i fs
npm i moment-timezone
npm i cfonts
npm i emoji-regex
npm i imgbb-uploader
npm i spinnies
npm i crypto

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
