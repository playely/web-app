import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { IContent } from '../../../../services/content/models/content';
import { formatTime } from '../../../../utils/player-utils';

interface PlayerConfig {
  minTime: number;
  maxTime: number
}

interface PlayerState {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
}

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {
  @Input() content: IContent | undefined;
  @ViewChild(MatSlider) slider: MatSlider | undefined;
  playerConfig: PlayerConfig = {
    minTime: 0,
    maxTime: 9000, // 2.5 hours
  }
  playerState: PlayerState = {
    isPlaying: false,
    isLoading: false,
    currentTime: 9000,
    duration: 9000,
  }
  sliderTime = 0;
  constructor(private router: Router, private location: Location) {
    this.sliderTime = this.playerState.currentTime;
  }

  ngOnInit(): void {
  }

  play(): void {
    this.playerState.isPlaying = true;
  }

  pause(): void {
    this.playerState.isPlaying = false;
  }

  forward(): void {
    this.playerState.isLoading = true;
    setTimeout(() => {
      this.playerState.isLoading = false;
      if (this.playerState.currentTime + 5 <= this.playerConfig.maxTime) {
        this.playerState.currentTime += 5;
      }
    }, 1000);
  }

  rewind(): void {
    this.playerState.isLoading = true;
    setTimeout(() => {
      this.playerState.isLoading = false;
      if (this.playerState.currentTime - 5 >= 0) {
        this.playerState.currentTime -= 5;
      }
    }, 1000);
  }

  goBack(): void {
    if (this.router.navigated) {
      this.location.back();
    } else {
      this.router.navigate(['']);
    }
  }

  /**
   * Fired when the mat slider is released
   * @param event 
   */
  handleSliderChange(event: MatSliderChange) {
    this.slider?.blur();
    this.playerState.currentTime = Number(event.value);
    this.playerState.isLoading = true;
    setTimeout(() => {
      this.playerState.isLoading = false;
    }, 2000);
  }

  /**
   * Fired when mat slider value changes
   * @param event 
   */
  handleSliderInput(event: MatSliderChange) {
    if (event && event.value) {
      this.sliderTime = event.value;
    }
  }

  formatTime(value: number): string {
    return formatTime(value);
  }
}
