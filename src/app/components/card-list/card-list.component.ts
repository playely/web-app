import { Component } from '@angular/core';
import { IContentList } from '@models/IContentList';
import { contentList1Mock } from '@mocks/contentList.mock';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  contentList: IContentList = contentList1Mock;
}
