import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel } from 'src/app/services/content/models/carousel';
import { CarouselType } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isAuth = this.authService.isUserAuthenticated;
  carousels: ICarousel[] = [];
  hero: ICarousel | undefined;
  constructor(private contentService: ContentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.contentService.getHomeCarousels().then((result) => {
      this.carousels = result.filter((element) => element.type !== CarouselType.HERO);
      this.hero = result.find((element) => element.type === CarouselType.HERO);
    });
  }

}
