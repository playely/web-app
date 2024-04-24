import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IContent } from '@models/IContent';
import { AspectRatio } from '@models/IContentList';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content?: IContent;
  @Input() aspectRatio: AspectRatio = '16x9';

  manageError(event: Event) {
    const target = event.target as HTMLElement;
    target.style.visibility = 'hidden';
  }
}
