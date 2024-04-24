import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglePlayerComponent } from '@components/player/player.component';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [SinglePlayerComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  content?: TMDBDetails;
  constructor(private router: Router) {
      const data = this.router.getCurrentNavigation()?.extras.state;
      if (data) {
        this.content = data as TMDBDetails;
      }
  }
}
