import { Component, Input } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { Location, NgIf } from '@angular/common';
import { PlayerCTRLBarComponent } from './player-ctrl-bar/player-ctrl-bar.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

declare type PlayerMode = 'modal' | 'page';

@Component({
  selector: 'app-single-player',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule, MatDialogModule, NgIf, PlayerCTRLBarComponent],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class SinglePlayerComponent {
  @Input() content?: TMDBDetails;
  @Input() mode: PlayerMode = 'modal';
  isLoading = true;
  isPlaying = true;


  constructor(private location: Location, private router: Router){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  get isModal() {
    return this.mode == 'modal';
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  goBack() {
    if (this.router.navigated) {
      this.location.back(); 
    } else {
      this.router.navigate(['/']);
    }
  }
}
