import { Component, Input, OnInit } from '@angular/core';
import { ICarousel, IContent } from 'src/app/services/content/models/carousel';
import { CarouselType } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-card-carousel',
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

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Handle Click on card
   *
   * @param event 
   */
  handleClickCard(event: IContent): void {
    console.log(event);
  }

  /**
   * Handle see al option
   */
  handleSeeAll(): void {
    console.log('See all of ', this.carousel);
  }

}
