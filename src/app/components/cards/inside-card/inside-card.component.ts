import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContent } from 'src/app/services/content/models/content';
import { CardAspectRatio } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-inside-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inside-card.component.html',
  styleUrls: ['./inside-card.component.scss']
})
export class InsideCardComponent {
  @Output() clickCard = new EventEmitter<IContent>();
  @Input() aspectRatio: CardAspectRatio = CardAspectRatio.SQUARE;
  @Input() item: IContent | undefined;
  
  get aspectRatioClass (): string {
    return `aspect-ratio-${this.aspectRatio}`
  }

  click(): void {
    this.clickCard.emit(this.item);
  }

}
