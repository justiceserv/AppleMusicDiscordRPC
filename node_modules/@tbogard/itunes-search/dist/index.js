"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSong = exports.searchPodcast = exports.searchMusicVideo = exports.searchMovie = exports.searchBook = exports.searchAudiobook = exports.searchApp = exports.searchAll = exports.searchArtist = exports.searchAlbum = void 0;
const index_1 = require("./iTunesSearch/index");
const iTunesSearch = new index_1.iTunesSearch();
exports.searchAlbum = iTunesSearch.searchAlbum, exports.searchArtist = iTunesSearch.searchArtist, exports.searchAll = iTunesSearch.searchAll, exports.searchApp = iTunesSearch.searchApp, exports.searchAudiobook = iTunesSearch.searchAudiobook, exports.searchBook = iTunesSearch.searchBook, exports.searchMovie = iTunesSearch.searchMovie, exports.searchMusicVideo = iTunesSearch.searchMusicVideo, exports.searchPodcast = iTunesSearch.searchPodcast, exports.searchSong = iTunesSearch.searchSong;
