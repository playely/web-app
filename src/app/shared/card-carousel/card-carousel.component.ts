import { Component, Input, OnInit } from '@angular/core';
import { ICarousel } from 'src/app/services/content/models/carousel';
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

}
