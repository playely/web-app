import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  content: IContent | undefined;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent('id').then((result) => {
      this.content = result;
    });
  }

}
