import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-inner-card',
  templateUrl: './inner-card.component.html',
  styleUrls: ['./inner-card.component.scss']
})
export class InnerCardComponent implements OnInit {
  @Input() item: IContent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
