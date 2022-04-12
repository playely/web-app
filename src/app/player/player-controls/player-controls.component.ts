import { Component, Input, OnInit } from '@angular/core';
import { IContent } from 'src/app/services/content/models/carousel';
import { Options } from "@angular-slider/ngx-slider";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true
  };
  constructor(private router: Router, private location: Location) { }

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

  goBack(): void {
    if (this.router.navigated) {
      this.location.back();
    } else {
      this.router.navigate(['']);
    }
  }

}
