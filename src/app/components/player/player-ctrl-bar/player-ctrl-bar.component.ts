import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { PlayerTimePipe } from '@pipes/player-time.pipe';

@Component({
  selector: 'app-player-ctrl-bar',
  standalone: true,
  imports: [MatIconModule, MatSliderModule, PlayerTimePipe, NgIf],
  templateUrl: './player-ctrl-bar.component.html',
  styleUrl: './player-ctrl-bar.component.scss'
})
export class PlayerCTRLBarComponent {
  @Input() isPlaying = true;
  @Output() togglePlay = new EventEmitter(); 
  isFullscreen = false;
  isPip = false;
  isMute = false;
  duration = 1810000;
  currentTime = 0;

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  togglePip() {
    this.isPip = !this.isPip;
  }

  toggleSound() {
    this.isMute = !this.isMute;
  }

  onValueChange(event: Event) {
    this.currentTime = (event.target as HTMLInputElement).valueAsNumber;
  }

  onBackward() {
    if (this.currentTime - 10000 > 0) {
      this.currentTime = this.currentTime - 10000;
    } else {
      this.currentTime = 0;
    }
  }

  onForward() {
    this.currentTime = this.currentTime + 10000;
  }
}
