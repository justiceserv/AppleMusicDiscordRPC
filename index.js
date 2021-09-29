const iTunes = require('itunes-bridge'); 
const rpcclient = require('discord-rich-presence')('891586647790075964'); 
const { searchSong } = require('@tbogard/itunes-search'); 
const iTunesEmitter = iTunes.emitter; 
iTunesEmitter.on('playing', function(type, CurrentTrack)
{
    searchSong(`${CurrentTrack.artist} - ${CurrentTrack.name}`).then((result)=>
    //result.results[0].trackViewUrl
        rpcclient.updatePresence({
            state: `Album: ${CurrentTrack.album}`,
            details: `Playing ${CurrentTrack.name}`, 
            startTimestamp: CurrentTrack.elapsedTime, 
            largeImageKey: `defaultgenre`, 
            smallImageKey: `maclogo`
        })
    ); 
    console.log(CurrentTrack)
})
iTunesEmitter.on('paused', function(type, currentTrack)
{
    rpcclient.updatePresence({});
})
iTunesEmitter.on('stopped', function()
{
    
})