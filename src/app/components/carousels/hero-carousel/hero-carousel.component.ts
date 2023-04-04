import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ICarousel, IContent } from 'src/app/services/content/models/content';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperModule } from 'swiper/angular';
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, SwiperModule, MatIconModule, TranslateModule, MatButtonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {
  @Input() carousel: ICarousel | undefined;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  goToPlayer(content: IContent): void {
    this.router.navigate([`player/${content.title}`], { state: content });
  }
}
