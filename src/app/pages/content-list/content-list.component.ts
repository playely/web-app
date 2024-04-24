import { Component } from '@angular/core';
import { BannerComponent } from '@components/banner/banner.component';
import { CardListComponent } from '@components/card-list/card-list.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [BannerComponent, CardListComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
}
