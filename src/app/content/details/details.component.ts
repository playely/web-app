import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel, IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  content: IContent | undefined;
  suggestedCarousel: ICarousel | undefined;
  relatedCarousel: ICarousel | undefined;
  constructor(private contentService: ContentService, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.scrollToTop();
    // get content to details
    this.contentService.getContent('id').then((result) => {
      this.content = result;
      this.title.setTitle(result.title);
    });
    //get suggested carousel
    this.contentService.getSuggested('id').then((result) => {
      this.suggestedCarousel = result;
      this.suggestedCarousel.title = `${this.content?.type}s to you`;
    });
    // get related carousel
    this.contentService.getRelated('id').then((result) => {
      this.relatedCarousel = result;
      this.relatedCarousel.title = `Related ${this.content?.type}s`;
    });
  }

  redirectToPlayer(): void {
    this.router.navigate([`player/${this.content?.title}`], { state: this.content });
  }

  private scrollToTop() {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }
}
