import { Component, inject } from '@angular/core';
import { IContent } from '@models/IContent';
import { CardListComponent } from '@components/card-list/card-list.component';
import { BannerBlockComponent } from './banner-block/banner-block.component';
import { ActionsBlockComponent } from './actions-block/actions-block.component';
import { SeriesBlockComponent } from './series-block/series-block.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentService } from '@services/content.service';
import { IContentList } from '@models/IContentList';

@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [NgIf, CardListComponent, BannerBlockComponent, ActionsBlockComponent, SeriesBlockComponent],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.scss'
})
export class ContentDetailsComponent {
  content: IContent | undefined;
  recommendations: IContentList | undefined;
  contentId$ = this.activatedRoute.params.pipe(map((q) => q['contentId']));

  constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.contentId$.subscribe((contentId) => {
      const mediaType = this.activatedRoute.snapshot.params['mediaType'];
      this.contentService.getDetails(mediaType, contentId).then(response => {
        response.mediaType = this.activatedRoute.snapshot.params['mediaType'];
        this.content = response;
        this.getRecommendations();
      }).catch((e) => {
        this.router.navigate(['/not-found']);
      });
    })
  }

  getRecommendations() {
    this.contentService.getRecommendations(
      this.activatedRoute.snapshot.params['mediaType'],
      this.activatedRoute.snapshot.params['contentId'])
      .then((response)=> {
        this.recommendations = response;
      })
  }

}
