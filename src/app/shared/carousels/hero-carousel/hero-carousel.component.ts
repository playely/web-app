import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarousel, IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-hero-carousel',
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
