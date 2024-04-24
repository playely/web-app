import { Component } from '@angular/core';
import { BannerComponent } from '@components/banner/banner.component';
import { CardListComponent } from '@components/card-list/card-list.component';
import { ContentService } from '@services/content.service';
import { ActivatedRoute } from '@angular/router';
import { TMDBResponse } from '@models/tmdb/TMDBResponse';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [BannerComponent, CardListComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentList?: TMDBResponse[];
  constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({ listId }) => {
      switch (listId) {
        case 'movies': this.fetchMoviesContentList();
          break;
        case 'series': this.fetchSeriesContentList();
          break;
        default: this.fetchContentList();
          break;
      }
    })
  }

  private fetchContentList() {
    Promise.all([
      this.contentService.getTrending(),
      this.contentService.getTrending('week'),
    ]).then(value => {
      const results = value[0].results;
      value[0].results = results.slice(0, 10);
      value.push({
        page: 1,
        results,
        total_pages: 1000,
        total_results: 1000,
        title: 'Trending'
      });
      this.contentList = value;
    });
  }

  private fetchMoviesContentList() {
    Promise.all([
      this.contentService.getDiscoverMovies(),
      this.contentService.getDiscoverMovies(2),
    ]).then(value => {
      const results = value[0].results;
      value[0].results = results.slice(0, 10);
      value.push({
        page: 1,
        results,
        total_pages: 1000,
        total_results: 1000,
        title: 'Trending'
      });
      this.contentList = value;
    });
  }

  private fetchSeriesContentList() {
    Promise.all([
      this.contentService.getDiscoverSeries(),
      this.contentService.getDiscoverSeries(2),
      this.contentService.getTopSeries(),
    ]).then(value => {
      const results = value[0].results;
      value[0].results = results.slice(0, 10);
      value.push({
        page: 1,
        results,
        total_pages: 1000,
        total_results: 1000,
        title: 'Trending'
      });
      this.contentList = value;
    });
  }
}
