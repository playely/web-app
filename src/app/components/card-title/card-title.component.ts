import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  @Input() title: string = '';
  @Input() mediaType: string = '';
  @Input() id?: number;
}
