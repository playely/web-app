import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '@services/content.service';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { CardGridComponent } from '@components/card-grid/card-grid.component';

@Component({
  selector: 'app-content-collection',
  standalone: true,
  imports: [CardGridComponent],
  templateUrl: './content-collection.component.html',
  styleUrl: './content-collection.component.scss'
})
export class ContentCollectionComponent {
  params$ = this.activatedRoute.params;
  contentList: TMDBDetails[] = [];
  title: string = '';

  constructor(private activatedRoute: ActivatedRoute, private contentService: ContentService, private router: Router){
    this.params$.subscribe((params) => {
      this.getCollection(params['mediaType'], params['collectionId'])
    });
  }

  getCollection(mediaType: string, id: number) {
    const state = this.router.getCurrentNavigation()?.extras.state;
      if (state) this.title = state['title'] ?? '';
    if (mediaType == 'movies') {
    this.contentService.getDiscoverMovies(1, id.toString()).then((res)=>{
      this.contentList = res.results;
    });
    } else if (mediaType == 'tv') {
      this.contentService.getDiscoverSeries(1, id.toString()).then((res)=>{
        this.contentList = res.results;
      });
    }
  }
}
