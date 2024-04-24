import { TMDBResponse } from "@models/tmdb/TMDBResponse";
import { IContentList } from "@models/IContentList";
import { IImageConfig } from "@models/IImageConfig";
import { ContentMapper } from "./content-mapper";

export const ListMapper = (response: TMDBResponse, imageConfig: IImageConfig):IContentList  => ({
    aspectRatio: '2x3',
    contents: response.results.map(result=>ContentMapper(result, imageConfig)),
    id: 'tmdb-id-recommendation',
    type: 'cards',
    title: 'You Might Also Like',
})

export const ListCustomMapper = (response: TMDBResponse, imageConfig: IImageConfig, mediaType: string):IContentList[]  => ([
    {
        aspectRatio: '2x3',
        contents: response.results.slice(0, 10).map(result=>ContentMapper(result, imageConfig)),
        id: 'tmdb-id',
        type: 'cards',
        title: 'Discover '+ mediaType,
    },
    {
        aspectRatio: '2x3',
        contents: response.results.slice(10, response.results.length).map(result=>ContentMapper(result, imageConfig, mediaType)),
        id: 'tmdb-id-2',
        type: 'cards',
        title: 'New '+ mediaType,
    }
])

export const ListHeroMapper = (response: TMDBResponse, imageConfig: IImageConfig, title: string):IContentList[]  => ([
    {
        aspectRatio: '2x3',
        contents: response.results.map(result=>ContentMapper(result, imageConfig)),
        id: 'tmdb-id-2',
        type: 'cards',
        title,
    }
])