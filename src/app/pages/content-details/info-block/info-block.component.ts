import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IContent } from '@models/IContent';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [NgIf],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss'
})
export class InfoBlockComponent {
  @Input() content?: IContent;
}
