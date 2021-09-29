import { ReturnType } from "../typings/types";
import { IiTunesSearch, ISearchAllOptions } from "./interfaces";
export declare class iTunesSearch implements IiTunesSearch {
    options: ISearchAllOptions;
    defaultOptions: ISearchAllOptions;
    private iTunesFetch;
    searchAlbum: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchSong: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchArtist: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchApp: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchMovie: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchMusicVideo: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchBook: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchAudiobook: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchPodcast: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    searchAll: (term: string, options?: ISearchAllOptions | undefined) => Promise<ReturnType>;
    private performSearch;
    private validate;
}
//# sourceMappingURL=index.d.ts.map