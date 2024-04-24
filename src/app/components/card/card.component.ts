import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AspectRatio } from '@models/AspectRatio';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ImageUrlPipe } from '@pipes/image-url.pipe';
import { DurationPipe } from '@pipes/duration.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgIf, RouterModule, ImageUrlPipe, DurationPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content?: TMDBDetails;
  @Input() aspectRatio: AspectRatio = '16x9';
  @Input() showTitle: boolean = false;
  @Input() showOverview: boolean = false;

  manageError(event: Event) {
    const target = event.target as HTMLElement;
    target.style.visibility = 'hidden';
  }
}
