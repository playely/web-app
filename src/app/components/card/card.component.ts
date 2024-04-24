import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AspectRatio } from '@models/AspectRatio';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ImageUrlPipe } from '@pipes/image-url.pipe';
import { DurationPipe } from '@pipes/duration.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogEpisodeComponent } from '@components/dialog-episode/dialog-episode.component';

export declare type ClickMode = 'modal' | 'redirection';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgIf, RouterModule, ImageUrlPipe, DurationPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content?: TMDBDetails;
  @Input() clickMode: ClickMode = 'redirection';
  @Input() aspectRatio: AspectRatio = '16x9';
  @Input() showTitle: boolean = false;
  @Input() showOverview: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  onClick() {
    if (!this.content) return;
    if (this.clickMode == 'redirection') {
      this.router.navigate(['/', this.content.media_type, this.content.id]);     
    } else {
      this.dialog.open(DialogEpisodeComponent, {
        data: this.content,
        panelClass: 'episode-dialog-panel',
        backdropClass: 'episode-dialog-backdrop',
        hasBackdrop: true,
      });
    }
  }

  manageError(event: Event) {
    const target = event.target as HTMLElement;
    target.style.visibility = 'hidden';
  }
}
