import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IContent } from '@models/IContent';
import { IContentList } from '@models/IContentList';
import { CardListComponent } from '@components/card-list/card-list.component';
import { SeriesBlockComponent } from '../series-block/series-block.component';
import { InfoBlockComponent } from '../info-block/info-block.component';

interface ITab {
  name: string;
  key: string;
}

@Component({
  selector: 'app-tabs-block',
  standalone: true,
  imports: [NgClass, SeriesBlockComponent, CardListComponent, InfoBlockComponent],
  templateUrl: './tabs-block.component.html',
  styleUrl: './tabs-block.component.scss'
})
export class TabsBlockComponent implements OnInit {
  @Input() content?: IContent;
  @Input() recommendations?: IContentList;
  selectedTab: ITab | undefined;
  tabs: ITab[] = [
    {
      key: 'eps',
      name: 'Episodes'
    },
    {
      key: 'info',
      name: 'Information'
    },
     {
      key: 'rec',
      name: 'Recommendations'
     }
  ];

  ngOnInit(): void {
    this.selectedTab = this.tabs[0];
  }

  selectTab(tab: ITab) {
    this.selectedTab = tab;
  }

}
