import { DatePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { SeparatorPipe } from '@pipes/separator.pipe';
import { FindCrewPipe } from '@pipes/find-crew.pipe';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [NgIf, SeparatorPipe, DatePipe, FindCrewPipe],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss'
})
export class InfoBlockComponent {
  @Input() content?: TMDBDetails;
}
