import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { ImageUrlPipe } from '@pipes/image-url.pipe';

@Component({
  selector: 'app-banner-block',
  standalone: true,
  imports: [NgIf, ImageUrlPipe],
  templateUrl: './banner-block.component.html',
  styleUrl: './banner-block.component.scss'
})
export class BannerBlockComponent {
  @Input() content?: TMDBDetails;
}
