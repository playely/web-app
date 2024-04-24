import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { SwiperContainer } from 'swiper/element';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { SwiperDirective } from '@directives/swiper.directive';
import { SwiperOptions } from 'swiper/types';
import { TMDBResponse } from '@models/tmdb/TMDBResponse';

export interface Card {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, NgStyle, NgFor, NgIf, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @ViewChild('swiper') swiperContainer?: ElementRef<SwiperContainer>; 
  @Input() contentList?: TMDBResponse;
  @Input() title: string = 'Default Title';

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: '20px',
    breakpoints: {
      576: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 8,
      },
    }
  };

  prev() {
    this.swiperContainer?.nativeElement.swiper.slidePrev();
  }

  next()  {
    this.swiperContainer?.nativeElement.swiper.slideNext();

  }
}
