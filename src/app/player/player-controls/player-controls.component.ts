import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {
  @Input() content: IContent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
