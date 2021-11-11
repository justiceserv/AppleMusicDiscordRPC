var exports = module.exports = {};

exports.getGenreAssets = function (album, genreinput, artist) {
  var temp = genreinput.toLowerCase();
  var iualbumdata = require('./datas/iualbums.json')
  if (artist.includes('IU')) {
    if(!album || !iualbumdata[album]) {
      return 'iudefault'
    }
    console.log(iualbumdata[album])
    return iualbumdata[album]
  }
  else { return switchGenre(temp) }
}

function switchGenre(genrelower) {
  var albumdata = require('./datas/genre.json')
  if (!genrelower || !albumdata[genrelower]) {
    return 'defaultgenre'
  }
  else {
    console.log(albumdata[genrelower])
    return albumdata[genrelower]
  }
}
