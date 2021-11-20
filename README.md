<img src="./image/../images/새%20프로젝트-2.png" style="display: block; margin: 0 auto; width: 20%;">

# Apple Music Discord Presence

**This program is made to give similar experience to apple music users compared to spotify.**

## Requirements

- [Node.js >= v8](https://nodejs.org/)
- iTunes or Apple Music

## Preview

<image src="./images/preview2.png" width="25%">
<image src="./images/preview.png" width="60%">

## Usage

* Install globally: `npm i -g applemusicdiscordrpc`
* Run in a shell: `applemusicdiscordpresence`

## Features

- Changes album graphic according to genre. (90% accurate.)  
(If metadata of song is not given, presence will display default picture.)
- Displays your song name and album.
- “Listen On Apple Music” will take you to Apple Music URL of your currently playing music.  (This only works when the song is available in Apple Music, US Storefront.)
- Displays how much time is left for your song to end.
- Special love to **IU**, all album covers will be displayed only for IU’s music!

**Unfortunately, `windows.bat` will not automatically install Node.js, but only lead you to installing website. After installing Node.js, everything will be automatic.**

## Used Packages

- [discord-rpc](https://www.npmjs.com/package/discord-rpc)
- [itunes-bridge](https://www.npmjs.com/package/itunes-bridgei)
- [@tbogard/itunes-search](https://www.npmjs.com/package/@tbogard/itunes-search)

❤️ to all open source contributors, this program will not exist without them.

Special thanks to: [sboh1214](https://github.com/sboh1214) for providing full list of genre from Apple Music!  
**(APPLE U SUCK, give students way to get developer token.)**

### + I added full list of apple music genre as json, in case you need it!

**This project should be opened after Discord is started. I am developing another project to give more Spotify-like experience. [Check Here](https://github.com/justiceserv/AppleMusicRPCEverywhere)**
