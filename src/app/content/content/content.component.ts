import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  carousels: ICarousel[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeCarousels().then((result) => {
      this.carousels = result;
    });
  }

}
