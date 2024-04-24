import { DatePipe, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ImageUrlPipe } from '@pipes/image-url.pipe';
import { DurationPipe } from '@pipes/duration.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-episode',
  standalone: true,
  imports: [NgIf, ImageUrlPipe, DurationPipe, DatePipe, RouterModule, MatButtonModule, MatDialogModule],
  templateUrl: './dialog-episode.component.html',
  styleUrl: './dialog-episode.component.scss'
})
export class DialogEpisodeComponent {
  content: TMDBDetails;
  constructor(public dialogRef: MatDialogRef<DialogEpisodeComponent>,
    @Inject(MAT_DIALOG_DATA) data: TMDBDetails) {
      this.content = data;
  }

  manageError(event: Event) {
    const target = event.target as HTMLElement;
    target.style.visibility = 'hidden';
  }
}
