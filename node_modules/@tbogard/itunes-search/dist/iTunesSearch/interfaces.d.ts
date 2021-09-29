import { AttributeType, EntityType, ReturnType } from "../typings/types";
export interface ISearchAllOptions {
    [key: string]: any;
    limit?: number | string | undefined;
    entity?: EntityType | string | null | undefined;
    attribute?: AttributeType | string | null | undefined;
    language?: string | null | undefined;
    country?: string | null | undefined;
}
export interface ISearchMandatoryAllOptions {
    limit?: number;
    entity: EntityType;
    attribute: AttributeType;
    language?: string;
    country?: string;
}
export interface IiTunesSearch {
    defaultOptions: ISearchAllOptions;
    searchAlbum: (term: string, options?: ISearchAllOptions) => Promise<ReturnType>;
    searchSong(term: string, options?: ISearchAllOptions): Promise<ReturnType>;
    searchArtist: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchApp: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchMovie: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchMusicVideo: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchBook: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchAudiobook: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchPodcast: (term: string, options: ISearchAllOptions) => Promise<ReturnType>;
    searchAll: (term: string, options: ISearchMandatoryAllOptions) => Promise<ReturnType>;
}
export interface ISearchSong {
    (term: string, options: ISearchAllOptions): Promise<ReturnType>;
}
//# sourceMappingURL=interfaces.d.ts.map