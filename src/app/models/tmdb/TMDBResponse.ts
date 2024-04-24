import { TMDBDetails } from "./TMDBDetail";
import { TMDBGenre } from "./TMDBGenre";

export interface TMDBResponse {
    page: number;
    results: TMDBDetails[];
    genres?: TMDBGenre[];
    total_pages: number;
    total_results: number;
    title?: string;
}