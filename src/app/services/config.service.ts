import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TMDBConfig } from '@models/tmdb/TMDBConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = 'https://api.themoviedb.org/3/configuration';
  private config?: TMDBConfig;

  constructor(private http: HttpClient) { }

  async getTMDBConfig() {
    if (!this.config) {
      this.config = await this.fetchConfig();
      // console.log('[config]', this.config);
    }
  }


  getConfig() {
    return this.config;
  }

  private fetchConfig() {
    return firstValueFrom(this.http.get<TMDBConfig>(this.url));
  }
}
