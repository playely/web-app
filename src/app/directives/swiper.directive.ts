import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
  standalone: true
})
export class SwiperDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.config) {
        Object.assign(this.el.nativeElement, this.config);
        this.el.nativeElement?.initialize();
      }
    }
  }
}
