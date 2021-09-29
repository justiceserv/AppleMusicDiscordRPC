var exports = module.exports = {};

exports.getGenreAssets = function (album, genreinput, artist) {
    let temp = genreinput.toLowerCase();
    switch (artist) {
        case 'IU':
            return switchGenre(temp);
        default:
            return switchGenre(temp);
    }
}

function switchGenre(genreinput) {
    switch (genreinput) {
        case 'jazz':
            return 'jazzgenre';
        case 'Soundtrack':
            return 'soundtrackgenre';
        case 'k-pop':
            return 'kpopgenre';
        default:
            return 'defaultgenre';
    }
}