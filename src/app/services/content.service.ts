import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TMDBResponse } from '@models/tmdb/TMDBResponse';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './config.service';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { TMDBSeason } from '@models/tmdb/TMDBSeason';
import { getLogoPath } from '@utils/content.utils';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private config:ConfigService) { }

  getDiscoverMovies(pageNumber: number = 1, genres?: string): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/movie?page=${pageNumber}?append_to_response=imagessort_by=popularity.desc${genres ? `&with_genres=${genres}`: ''}`))
    .then(value=>({...value, title: 'Best Movies', results: value.results.map(el=>({...el, media_type: 'movie'}))}));
  }

  getDiscoverSeries(pageNumber: number = 1, genres?: string): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/tv?page=${pageNumber}?append_to_response=imagessort_by=popularity.desc${genres ? `&with_genres=${genres}`: ''}`))
    .then(value=>({...value, title: 'Best Series', results: value.results.map(el=>({...el, media_type: 'tv'}))}));
  }

  getTrending(time: string = 'day'): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/trending/all/${time}`))
    .then(value=>({...value, title: 'Best of the '+ time}));
  }

  getTopSeries(): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/tv/top_rated?append_to_response=images`))
    .then(value=>({...value, title: 'Top 10', results: value.results.map(el=>({...el, media_type: 'tv'}))}));
  }

  getDetails(mediaType: string, contentId: number) {
    return firstValueFrom(this.http.get<TMDBDetails>(`https://api.themoviedb.org/3/${mediaType}/${contentId}?append_to_response=credits,images,keywords,recommendations,similar,providers,seasons`))
    .then(value=>({ ...value, logo_path: getLogoPath(value) }));
  }

  getSeasonDetails(series_id: number, season_number: number) {
    return firstValueFrom(this.http.get<TMDBSeason>(`https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}?append_to_response=details`))
    .then(value=>({ ...value, episodes: value.episodes?.map((ep)=>({...ep, media_type: 'episode'})) }));
  }

  getEpisodeDetails(series_id: number, season_number: number, episode_number: number) {
    return firstValueFrom(this.http.get<TMDBDetails>(` https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}/episode/${episode_number}?append_to_response=credits,images,keywords,recommendations,similar,providers,seasons`))
    .then(value=>({ ...value, logo_path: getLogoPath(value) }));
  }

  getRecommendations(mediaType: number, contentId: number) {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/${mediaType}/${contentId}/recommendations`));
  }

  getMovieGenres() {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/genre/movie/list`));
  }

  getSeriesGenres() {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/genre/tv/list`));
  }

  getSearchResults(text: string, page: number = 1) {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/search/multi?query=${text}&include_adult=false&language=en-US&page=${page}`))
    .then((res)=>({...res, results: res.results.filter((item)=>item.media_type && ['movies', 'tv'].includes(item.media_type))}))
  }
}
