import { Component } from '@angular/core';
import { BannerComponent } from '@components/banner/banner.component';
import { CardListComponent } from '@components/card-list/card-list.component';
import { ContentService } from '@services/content.service';
import { IContentList } from '@models/IContentList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [BannerComponent, CardListComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentList: IContentList[] = [];
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
      // this.contentService.getDiscoverMovies(1),
    ]).then(value => {
      this.contentList = value.reduce((prev, current) => current.concat(prev));
      this.contentList[0].type = 'banner';
    });
  }

  private fetchMoviesContentList() {
    this.contentService.getDiscoverMovies().then(value => {
      this.contentList = value;
      this.contentList[0].type = 'banner';
    });
  }

  private fetchSeriesContentList() {
    this.contentService.getDiscoverSeries().then(value => {
      this.contentList = value;
      this.contentList[0].type = 'banner';
    });
  }
}
