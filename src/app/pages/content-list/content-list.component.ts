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
      this.contentList = value;
    });
  }

  private fetchMoviesContentList() {
    this.contentService.getDiscoverMovies().then(value => {
      this.contentList = [value];
    });
  }

  private fetchSeriesContentList() {
    this.contentService.getDiscoverSeries().then(value => {
      this.contentList = [value];
    });
  }
}
