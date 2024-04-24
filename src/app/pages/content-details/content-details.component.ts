import { Component } from '@angular/core';
import { BannerBlockComponent } from './banner-block/banner-block.component';
import { ActionsBlockComponent } from './actions-block/actions-block.component';
import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ContentService } from '@services/content.service';
import { DurationPipe } from '@pipes/duration.pipe';
import { isSeries } from '@utils/content.utils';
import { CardListComponent } from '@components/card-list/card-list.component';
import { TMDBSeason } from '@models/tmdb/TMDBSeason';
import { SeriesBlockComponent } from './series-block/series-block.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { map } from 'rxjs';

interface ITab {
  name: string;
  key: string;
}
@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [
    NgIf, 
    DurationPipe,
    NgClass, 
    BannerBlockComponent, 
    ActionsBlockComponent, 
    SeriesBlockComponent, 
    CardListComponent, 
    InfoBlockComponent
  ],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.scss'
})
export class ContentDetailsComponent {
  selectedTab?: ITab;
  tabs: ITab[] = [
    {
      key: 'info',
      name: 'Information'
    },
     {
      key: 'rec',
      name: 'Recommendations'
     }
  ];
  content?: TMDBDetails;
  currentSeason?: TMDBSeason;
  contentId$ = this.activatedRoute.params.pipe(map((q) => q['contentId']));

  constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.contentId$.subscribe((contentId) => {
      const mediaType = this.activatedRoute.snapshot.params['mediaType'];
      this.contentService.getDetails(mediaType, contentId).then(response => {
        response.media_type = this.activatedRoute.snapshot.params['mediaType'];
        this.content = response;
        if (isSeries(this.content)) {
          this.fetchSeasonDetails(1); 
          this.tabs.unshift({
            key: 'eps',
            name: 'Episodes'
          });
        }
        this.selectedTab = this.tabs[0];
      }).catch((e) => {
        this.router.navigate(['/not-found']);
      });
    })
  }

  fetchSeasonDetails(seasonNumber: number) {
    if (!this.content) return;
    this.contentService.getSeasonDetails(this.content.id, seasonNumber).then((episodes)=>{
      if (this.content) {
        this.currentSeason = episodes;
      }
    });
  }
  
  selectTab(tab: ITab) {
    this.selectedTab = tab;
  }

  onChangeSeason(seasonId: number) {
    if (!this.content) return;
    seasonId = Number(seasonId);
    const season = this.content.seasons?.find(s=>s.id === seasonId);
    if (!season) return;
    this.contentService.getSeasonDetails(this.content.id, season.season_number).then((episodes)=>{
      if (this.content) {
        this.currentSeason = episodes;
      }
    });
  }
  
}
