import { TMDBDetails } from "../../models/tmdb/TMDBDetail";
import { TMDBGenre } from "../../models/tmdb/TMDBGenre";
import { TMDBResponse } from "../../models/tmdb/TMDBResponse";
import { ContentService } from "../../services/content.service";
import { contentDetailsMock, contentGenresMock, contentMoviesMock, contentSeasonMock, contentTop10Mock, contentTrendingMock } from "../data-mocks/content.mock";

export class ContentServiceMock extends ContentService {
    constructor() {
        super(undefined as any);
    }
    
    override getDiscoverMovies(pageNumber?: number, genres?: string | undefined): Promise<TMDBResponse> {
       return Promise.resolve(contentMoviesMock);
    }
    override getDiscoverSeries(pageNumber?: number, genres?: string | undefined): Promise<TMDBResponse> {
        return Promise.resolve(contentMoviesMock);
    }
    override getTrending(time?: string): Promise<TMDBResponse> {
        return Promise.resolve(contentTrendingMock);
    }
    override getTopSeries(): Promise<TMDBResponse> {
        return Promise.resolve(contentTop10Mock);
    }
    override getDetails(mediaType: string, contentId: number): Promise<any> {
        return Promise.resolve(contentDetailsMock as any);
    }
    override getSeasonDetails(series_id: number, season_number: number): Promise<any> {
       return Promise.resolve(contentSeasonMock as any);
    }
    override getMovieGenres(): Promise<TMDBResponse> {
        return Promise.resolve(contentGenresMock);
    }
    override getSeriesGenres(): Promise<TMDBResponse> {
        return Promise.resolve(contentGenresMock);
    }
    override getSearchResults(text: string, page?: number): Promise<{ results: TMDBDetails[]; page: number; genres?: TMDBGenre[] | undefined; total_pages: number; total_results: number; title?: string | undefined; }> {
        return Promise.resolve(contentMoviesMock);
    }
}