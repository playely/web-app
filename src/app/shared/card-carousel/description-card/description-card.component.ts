import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {
  @Input() item: IContent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
