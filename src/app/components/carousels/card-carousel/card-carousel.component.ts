import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ICarousel, IContent } from 'src/app/services/content/models/content';
import { CardAspectRatio, CarouselType } from 'src/app/services/content/models/types';
import { SwiperModule } from 'swiper/angular';
import { DescriptionCardComponent } from '../../cards/description-card/description-card.component';
import { InsideCardComponent } from '../../cards/inside-card/inside-card.component';

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [CommonModule, SwiperModule, InsideCardComponent, DescriptionCardComponent, TranslateModule],
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() carousel: ICarousel | undefined;

  get isDescription(): boolean {
    return this.carousel?.type === CarouselType.DESCRIPTION;
  }

  get isInnerCard(): boolean {
    return this.carousel?.type === CarouselType.INNERCARD;
  }

  get carouselSize(): number {
    return this.carousel?.aspectRatio === CardAspectRatio.HORIZONTAL ? 4 : 8;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Handle Click on card
   *
   * @param event 
   */
  handleClickCard(event: IContent): void {
    this.router.navigate([`${event.type.toString().toLowerCase()}/${event.title}`], { state: event });
  }

  /**
   * Handle see al option
   */
  handleSeeAll(): void {
    console.log('See all of ', this.carousel);
  }

}
