import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel } from 'src/app/services/content/models/carousel';
import { Key } from 'ts-key-enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  recents: ICarousel | undefined;
  results: ICarousel | undefined;
  
  searchText: FormControl;
  constructor(private content: ContentService) { 
    this.searchText = new FormControl();
  }

  ngOnInit(): void {
    this.content.getRecentSeaches().then((result) => {
      this.recents = result;
    });
  }

  handleKeyup(event: KeyboardEvent): void {
    if (event.key === Key.Enter) {
      console.log('SEARCH FOR...', this.searchText.value);
    }
  }

}
