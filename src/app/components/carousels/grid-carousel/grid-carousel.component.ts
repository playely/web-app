import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarousel, IContent } from 'src/app/services/content/models/content';
import { InsideCardComponent } from '../../cards/inside-card/inside-card.component';

@Component({
  selector: 'app-grid-carousel',
  standalone: true,
  imports: [CommonModule, InsideCardComponent],
  templateUrl: './grid-carousel.component.html',
  styleUrls: ['./grid-carousel.component.scss']
})
export class GridCarouselComponent implements OnInit {
  @Input() carousel: ICarousel | undefined;
  @Input() cols: number = 2;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Handle card click
   *
   * @param event 
   */
  handleClickCard(event: IContent): void {
    this.router.navigate([`${event.type.toString().toLowerCase()}/${event.title}`], { state: event });
  }

}
