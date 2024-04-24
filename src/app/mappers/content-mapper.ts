import { IContent } from "@models/IContent";
import { TMDBDetails } from "@models/tmdb/TMDBDetail";
import { IImageConfig } from "@models/IImageConfig";

export const ContentMapper = (response: TMDBDetails, imageConfig: IImageConfig, media_type?: string): IContent => {
    return {
        mediaType: response.media_type?? media_type ?? 'unknown',
        isSeries: !!response.seasons,
        description: response.overview,
        id: response.id,
        image: `${imageConfig.baseUrl}${imageConfig.size}/${response.poster_path}`,
        backdropImage: `${imageConfig.baseUrl}${imageConfig.backdropSize}/${response.backdrop_path}`,
        title: response.title,
        uid: response.id,
        seasons: response.seasons,
    }
}