import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IContent } from '@models/IContent';

@Component({
  selector: 'app-banner-block',
  standalone: true,
  imports: [NgIf],
  templateUrl: './banner-block.component.html',
  styleUrl: './banner-block.component.scss'
})
export class BannerBlockComponent {
  @Input() content?: IContent;
}
