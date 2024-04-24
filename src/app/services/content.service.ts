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

  getDiscoverMovies(pageNumber: number = 1): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`));
  }

  getDiscoverSeries(pageNumber: number = 1): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/tv?page=${pageNumber}`));
  }

  getTrending(time: string = 'day'): Promise<TMDBResponse> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/trending/all/${time}`));
  }

  getDetails(mediaType: number, contentId: number) {
    return firstValueFrom(this.http.get<TMDBDetails>(`https://api.themoviedb.org/3/${mediaType}/${contentId}?append_to_response=credits,images,keywords,recommendations,similar,providers,seasons`))
    .then(value=>({ ...value, logo_path: getLogoPath(value) }));
  }

  getSeasonDetails(series_id: number, season_number: number) {
    return firstValueFrom(this.http.get<TMDBSeason>(`https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}?append_to_response=details`));
  }

  getRecommendations(mediaType: number, contentId: number) {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/${mediaType}/${contentId}/recommendations`));
  }
}
