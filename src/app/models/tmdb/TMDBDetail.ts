import { TMDBPeople } from "./TMDBPeople";
import { TMDBResponse } from "./TMDBResponse";
import { TMDBSeason } from "./TMDBSeason";

interface TMDBImage {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    width: number;
}

export interface TMDBCredits {
    cast?: TMDBPeople[];
    crew?: TMDBPeople[];
}

export interface TMDBDetails {
    id: number;
    title: string;
    name?: string;
    adult?: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    still_path?: string;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    media_type?: string;
    seasons?: TMDBSeason[];
    recommendations?: TMDBResponse;
    similar?: TMDBResponse;
    tagline?: string;
    genres?: any[];
    created_by?: TMDBPeople[];
    runtime?: number;
    air_date?: string;
    credits?: TMDBCredits;
    episode_number?: number;
    images: {
        backdrops?: TMDBImage[];
        logos?: TMDBImage[];
        posters?: TMDBImage[];
    };
    logo_path?: string;
}