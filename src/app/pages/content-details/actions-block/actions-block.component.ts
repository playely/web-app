import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actions-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './actions-block.component.html',
  styleUrl: './actions-block.component.scss'
})
export class ActionsBlockComponent {
  @Input() content?: any;
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
