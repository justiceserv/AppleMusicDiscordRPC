const iTunes = require('itunes-bridge');
const RPC = require('discord-rpc')
const { searchSong } = require('@tbogard/itunes-search');
const iTunesEmitter = iTunes.emitter;
const { AutoGitUpdate } = require('auto-git-update');
const config = {
    repository: 'https://github.com/justiceserv/MacOSDiscordRPC', 
    tempLocation: './tempupdate/'
}
const update = new AutoGitUpdate(config); 
update.autoUpdate(); 

let client = new RPC.Client({ transport: 'ipc' })
client.login({ clientId: '891586647790075964' }).catch(console.error);
iTunesEmitter.on('playing', function (CurrentTrack) {
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
                    large_image: `defaultgenre`,
                    large_text: 'test',
                    small_image: `applemusic`,
                    small_text: 'test',

                },
                buttons: [
                    {
                        label: 'Listen On Apple Music', url: `${result.results[0].trackViewUrl}`
                    },
                ]
            }
        })
    })
    console.log(CurrentTrack)
})
iTunesEmitter.on('paused', function () {
    client.request('SET_ACTIVITY', { pid: process.pid });
    console.log(`${CurrentTrack.name} is stopped`)
})
iTunesEmitter.on('stopped', function () {
    client.request('SET_ACTIVITY', { pid: process.pid });
    console.log(`Apple Music is stopped.`)
})