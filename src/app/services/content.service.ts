import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TMDBResponse } from '@models/tmdb/TMDBResponse';
import { ListCustomMapper, ListHeroMapper, ListMapper } from '@mappers/list-mapper';
import { IContentList } from '@models/IContentList';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './config.service';
import { ContentMapper } from '@mappers/content-mapper';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private config:ConfigService) { }

  getDiscoverMovies(pageNumber: number = 1): Promise<IContentList[]> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`))
    .then(res=>ListCustomMapper(res, this.config.getImageConfig(), 'movie'));
  }

  getDiscoverSeries(pageNumber: number = 1): Promise<IContentList[]> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/discover/tv?page=${pageNumber}`))
    .then(res=>{
      return ListCustomMapper(res, this.config.getImageConfig(), 'tv');
    });
  }

  getTrending(time: string = 'day'): Promise<IContentList[]> {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/trending/all/${time}`))
    .then(res=>ListHeroMapper(res, this.config.getImageConfig(), time + ' Trending'));
  }

  getDetails(mediaType: number, contentId: number) {
    return firstValueFrom(this.http.get<TMDBDetails>(`https://api.themoviedb.org/3/${mediaType}/${contentId}`))
    .then(res=>ContentMapper(res, this.config.getImageConfig()));
  }

  getRecommendations(mediaType: number, contentId: number) {
    return firstValueFrom(this.http.get<TMDBResponse>(`https://api.themoviedb.org/3/${mediaType}/${contentId}/recommendations`))
    .then(res=>ListMapper(res, this.config.getImageConfig()));
  }
}
