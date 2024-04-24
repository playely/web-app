import { Component } from '@angular/core';
import { IContent } from '@models/IContent';
import { contentListMock } from '@mocks/contentList.mock';
import { CardListComponent } from '@components/card-list/card-list.component';
import { BannerBlockComponent } from './banner-block/banner-block.component';
import { ActionsBlockComponent } from './actions-block/actions-block.component';
import { SeriesBlockComponent } from './series-block/series-block.component';

@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [CardListComponent, BannerBlockComponent, ActionsBlockComponent, SeriesBlockComponent],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.scss'
})
export class ContentDetailsComponent {
  content: IContent = contentListMock.contents[0];
}
