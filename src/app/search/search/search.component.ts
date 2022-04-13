import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  recents: ICarousel | undefined;
  results: ICarousel | undefined;
  
  constructor(private content: ContentService) { }

  ngOnInit(): void {
    this.content.getRecentSeaches().then((result) => {
      this.recents = result;
    });
  }

}
