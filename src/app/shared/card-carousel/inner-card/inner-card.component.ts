import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';
import { CardAspectRatio } from 'src/app/services/content/models/types';

@Component({
  selector: 'app-inner-card',
  templateUrl: './inner-card.component.html',
  styleUrls: ['./inner-card.component.scss']
})
export class InnerCardComponent implements OnInit {
  @Input() aspectRatio: CardAspectRatio = CardAspectRatio.SQUARE;
  @Input() item: IContent | undefined;
  
  get aspectRatioClass (): string {
    return `aspect-ratio-${this.aspectRatio}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
