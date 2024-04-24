import { Component, Input } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  @Input() contentList?: TMDBDetails[] = [];
}
