import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/app-base.component';
import { AppService } from 'src/app/services/app-service/app.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel } from 'src/app/services/content/models/carousel';
import { CarouselType } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent extends BaseComponent implements OnInit {
  isAuth = this.authService.isUserAuthenticated;
  carousels: ICarousel[] = [];
  hero: ICarousel | undefined;
  constructor(private contentService: ContentService, private authService: AuthService, private appService: AppService) {
    super();
  }

  ngOnInit(): void {
    this.fetchHome();
    this.appService.getLanguageChange()
    .pipe(takeUntil(this.destroy$))
    .subscribe((lg) => {
      if (lg) {
        this.fetchHome();
      }
    });
  }

  /**
   * Fetch all home carousels
   */
  fetchHome(): void {
    this.contentService.getHomeCarousels().then((result) => {
      this.carousels = result.filter((element) => element.type !== CarouselType.HERO);
      this.hero = result.find((element) => element.type === CarouselType.HERO);
    });
  }

}
