import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IContent } from '@models/IContent';

@Component({
  selector: 'app-actions-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './actions-block.component.html',
  styleUrl: './actions-block.component.scss'
})
export class ActionsBlockComponent {
  @Input() content?: IContent;
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
