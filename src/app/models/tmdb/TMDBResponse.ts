import { TMDBDetails } from "./TMDBDetail";

export interface TMDBResponse {
    dates?: {
        maximum: string;
        minimum: string;
    }
    page: number;
    results: TMDBDetails[];
    total_pages: number;
    total_results: number;
}