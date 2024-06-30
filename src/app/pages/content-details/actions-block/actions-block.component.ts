import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actions-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './actions-block.component.html',
  styleUrl: './actions-block.component.scss'
})
export class ActionsBlockComponent {
  @Input() content?: any;
  @Output() showCredits = new EventEmitter();
  @Output() showTrailer = new EventEmitter();
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  get enableToggleFavs() {
    return localStorage.getItem('user') !== null  && localStorage.getItem('user') !== undefined;
  }

}
