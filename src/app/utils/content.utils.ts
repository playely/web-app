import { TMDBDetails } from "@models/tmdb/TMDBDetail";

export const isSeries = (content: TMDBDetails | undefined): boolean => {
    return content?.media_type?.includes('tv') ?? false;
}

export const getLogoPath = (content: TMDBDetails) => {
    return content?.images?.logos?.find(logo=>logo.iso_639_1 === 'en')?.file_path ?? '';
}