import { Component, Input } from '@angular/core';
import { IContent } from '@models/IContent';
import { CardListComponent } from '@components/card-list/card-list.component';

@Component({
  selector: 'app-series-block',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './series-block.component.html',
  styleUrl: './series-block.component.scss'
})
export class SeriesBlockComponent {
  @Input() content?: IContent;
}
