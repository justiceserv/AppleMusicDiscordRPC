const iTunes = require('itunes-bridge');
const RPC = require('discord-rpc')
const { searchSong } = require('@tbogard/itunes-search');
const genre = require('./getGenreAsset')
const iTunesEmitter = iTunes.emitter;
let client = new RPC.Client({ transport: 'ipc' })
client.login({ clientId: '891586647790075964' }).catch(console.error);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

iTunesEmitter.on('playing', function (type, CurrentTrack) {
    console.log(CurrentTrack)
    searchSong(`${CurrentTrack.artist} - ${CurrentTrack.name}`).then((result) => {
        client.on('ready', () => { })
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity:
            {
                details: `Playing ${CurrentTrack.name}`,
                state: `Album: ${CurrentTrack.album}`,
                timestamps:
                {
                    end: Date.now() + CurrentTrack.remainingTime * 1000 + 1,
                },
                assets:
                {
                    large_image: genre.getGenreAssets(CurrentTrack.album, CurrentTrack.genre, CurrentTrack.artist),
                    //you can change this, but please give me some credit for this!
                    large_text: `Made by justiceserv's MacOSDiscordRPC`,
                    small_image: `applemusic`,
                    small_text: 'https://jserv.xyz/',

                },
                buttons: [
                    {
                        label: 'Listen On Apple Music', url: `${result.results[0].trackViewUrl}`
                    },
                ]
            }
        })
    }).catch(error => {
        client.on('ready', () => { })
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity:
            {
                details: `Playing ${CurrentTrack.name}`,
                state: `Album: ${CurrentTrack.album}`,
                timestamps:
                {
                    end: Date.now() + CurrentTrack.remainingTime * 1000 + 1,
                },
                assets:
                {
                    large_image: genre.getGenreAssets(CurrentTrack.album, CurrentTrack.genre, CurrentTrack.artist),
                    //you can change this, but please give me some credit for this!
                    large_text: `Made by justiceserv's MacOSDiscordRPC`,
                    small_image: `applemusic`,
                    small_text: 'https://jserv.xyz/',

                },
                buttons: [
                    {
                        label: 'Unable On Apple Music', url: ``
                    },
                ]
            }
        })
    })
})
iTunesEmitter.on('paused', function (type, CurrentTrack) {
    client.request('SET_ACTIVITY', { pid: process.pid });
    console.log(`${CurrentTrack.name} is stopped`)
})
iTunesEmitter.on('stopped', function () {
    client.on('ready', () => { })
    client.request('SET_ACTIVITY', { pid: process.pid });
    console.log(`Apple Music is stopped.`)
})