import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IContent } from 'src/app/services/content/models/content';
import { CardAspectRatio } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-description-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent {
  @Output() clickCard = new EventEmitter<IContent>();
  @Input() aspectRatio: CardAspectRatio = CardAspectRatio.SQUARE;
  @Input() item: IContent | undefined;
  
  get aspectRatioClass (): string {
    return `aspect-ratio-${this.aspectRatio}`
  }
  constructor() { }

  click(): void {
    this.clickCard.emit(this.item);
  }

}
