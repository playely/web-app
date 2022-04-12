import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICarousel, IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-grid-carousel',
  templateUrl: './grid-carousel.component.html',
  styleUrls: ['./grid-carousel.component.scss']
})
export class GridCarouselComponent implements OnInit {
  @Input() carousel: ICarousel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Handle card click
   *
   * @param event 
   */
  handleClickCard(event: IContent): void {
    console.log(event);
  }

}
