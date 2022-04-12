import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';
import { CardAspectRatio } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {
  @Output() clickCard = new EventEmitter<IContent>();
  @Input() aspectRatio: CardAspectRatio = CardAspectRatio.SQUARE;
  @Input() item: IContent | undefined;
  
  get aspectRatioClass (): string {
    return `aspect-ratio-${this.aspectRatio}`
  }
  constructor() { }

  ngOnInit(): void {
  }

  click(): void {
    this.clickCard.emit(this.item);
  }

}
