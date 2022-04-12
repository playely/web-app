import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  content: IContent | undefined;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent('id').then((result) => {
      setTimeout(() => {
        this.content = result;
      }, 1000);
    });
  }

}
