import { Component } from '@angular/core';
import { ContentService } from '@services/content.service';
import { CardListComponent } from '@components/card-list/card-list.component';
import { TMDBResponse } from '@models/tmdb/TMDBResponse';

@Component({
  selector: 'app-content-personal',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './content-personal.component.html',
  styleUrl: './content-personal.component.scss'
})
export class ContentPersonalComponent {
  favoritesList?: TMDBResponse;
  watchList?: TMDBResponse;
  constructor(private contentService: ContentService) {
    this.contentService.getTopSeries().then((res)=> {
      res.title = 'My Favorites';
      this.favoritesList = res;
    });
    this.contentService.getTrending('day').then((res)=> {
      res.title = 'Continue Watching';
      this.watchList = res;
    });
  }
}
