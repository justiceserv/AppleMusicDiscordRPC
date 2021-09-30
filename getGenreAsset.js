var exports = module.exports = {};

exports.getGenreAssets = function (album, genreinput, artist) {
    let temp = genreinput.toLowerCase();
    switch (artist) {
        case 'IU':
            switch(album){
                case 'Modern Times': 
                    return 'iumoderntimes'
                case 'Palette': 
                    return 'iupalette'
                case `IU 5th Album 'LILAC'`:
                    return 'iulilac'
                case 'CHAT-SHIRE':
                    return 'iuchatshire'
                case 'A Flower Bookmark': 
                    return 'iuflower'
                case 'Last Fantasy': 
                    return 'iulast'
                case 'Real': 
                    return 'iureal'
                case 'IU...IM':
                    return 'im'
                case 'Growing up':
                    return 'growingup'
                default: 
                    return switchGenre(temp); 
            }
        default:
            return switchGenre(temp);
    }
}

function switchGenre(genreinput) {
    switch (genreinput) {
        case 'jazz':
            return 'jazzgenre';
        case 'soundtrack':
            return 'soundtrackgenre';
        case 'k-pop':
            return 'kpopgenre';
        case 'pop':
            return 'popgenre'; 
        case 'rock':
            return 'rockgenre'; 
        default:
            return 'defaultgenre';
    }
}