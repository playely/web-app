import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TMDBConfig } from '@models/tmdb/TMDBConfig';
import { IImageConfig } from '@models/IImageConfig';

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
    }
  }

  getImageConfig(): IImageConfig {
    return {
      baseUrl: this.config?.images.base_url ?? '',
      size: this.config?.images.logo_sizes[3] ?? '',
      backdropSize: this.config?.images.backdrop_sizes[2] ?? '',
    }
  }

  private fetchConfig() {
    return firstValueFrom(this.http.get<TMDBConfig>(this.url));
  }
}
