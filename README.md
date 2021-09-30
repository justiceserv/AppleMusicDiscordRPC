<p align="center">
    <img src="./image/../images/새%20프로젝트-2.png" width="20%">
<p>

# Apple Music Discord Presence

**This program is made to give similar experience to apple music users compared to spotify.**

## Requirements 
- node.js (v8 or newer, mac users can ignore this, script will auto install.)
- npm 
- Obviously, iTunes or Apple Music
## Preview 
<image src="./images/preview2.png" width="25%">
<image src="./images/preview.png" width="60%">

## Functions 
- Changes album graphic according to genre. (90% accurate.)<br>(If metadata of song is not given, presence will display default picture.)
- Displays your song name and album. 
- "Listen On Apple Music" will take you to apple music url of your currently playing music. <br> (This only works when the song is available in Apple Music, US Storefront.)
- Displays how much time is left for your song to end. 
- Automatic script for macOS, just run ```sh macos.sh``` (or ```sh macosscreen.sh``` if you have screen in your OS) in program's directory. <br>(It will install all dependencies needed!)
- Special love to **IU**, all album covers will be displayed only for IU's music!

**Unfortunately, ```windows.bat``` will not automatically install nodejs, but only lead you to installing website. After installing nodejs, everything will be automatic.**

## Used Packages 
- [discord-rpc](https://www.npmjs.com/package/discord-rpc)
- [itunes-bridge](https://www.npmjs.com/package/itunes-bridgei)
- [@tbogard/itunes-search](https://www.npmjs.com/package/@tbogard/itunes-search)

:heart: to all open source contributors, this program will not exist without them. 

Special thanks to: [sboh1214](https://github.com/sboh1214) for providing full list of genre from apple music! <br>**(APPLE U SUCK, give students way to get developer token.)**

### + I added full list of apple music genre as json, in case you need it!