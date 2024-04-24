import { TMDBDetails } from "./TMDBDetail";

export interface TMDBResponse {
    page: number;
    results: TMDBDetails[];
    total_pages: number;
    total_results: number;
    title?: string;
}