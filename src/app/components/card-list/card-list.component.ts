import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren, ViewEncapsulation, signal } from '@angular/core';
import { IContentList } from '@models/IContentList';
import { contentList1Mock } from '@mocks/contentList.mock';
import { CardComponent } from '../card/card.component';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { SwiperDirective } from '../../directives/swiper.directive';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

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
  contentList: IContentList = contentList1Mock;
  swiperConfig: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: '20px',
    navigation: false,
  }

  prev() {
    this.swiperContainer?.nativeElement.swiper.slidePrev();
  }

  next()  {
    this.swiperContainer?.nativeElement.swiper.slideNext();

  }
}
