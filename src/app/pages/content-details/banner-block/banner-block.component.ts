import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ImageUrlPipe } from '@pipes/image-url.pipe';

@Component({
  selector: 'app-banner-block',
  standalone: true,
  imports: [NgIf, ImageUrlPipe, MatButtonModule, RouterModule],
  templateUrl: './banner-block.component.html',
  styleUrl: './banner-block.component.scss'
})
export class BannerBlockComponent {
  @Input() content?: TMDBDetails;
}
