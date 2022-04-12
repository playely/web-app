import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {
  @Input() content: IContent | undefined;
  playerState = {
    isPlaying: false,
    isLoading: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

  play(): void {
    this.playerState.isPlaying = true;
  }

  pause(): void {
    this.playerState.isPlaying = false;
  }

  forward(): void {
    return;
    this.playerState.isLoading = true;
    setTimeout(() => {
      this.playerState.isLoading = false;
    }, 2000);
  }

  rewind(): void {
    return;
    this.playerState.isLoading = true;
    setTimeout(() => {
      this.playerState.isLoading = false;
    }, 2000);
  }

}
