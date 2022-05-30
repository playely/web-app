import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/app-base.component';
import { AppService } from 'src/app/services/app-service/app.service';
import { ContentService } from 'src/app/services/content/content.service';
import { ICarousel, IContent } from 'src/app/services/content/models/carousel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  content: IContent | undefined;
  suggestedCarousel: ICarousel | undefined;
  relatedCarousel: ICarousel | undefined;
  constructor(private contentService: ContentService, private router: Router, private title: Title, private appService: AppService) { 
    super();
  }

  ngOnInit(): void {
    this.scrollToTop();
    this.fetchContent();
    this.appService.getLanguageChange()
    .pipe(takeUntil(this.destroy$))
    .subscribe((lg) => {
      if (lg) {
        this.fetchContent();
      }
    });
  }

  fetchContent(): void {
    // get content to details
    this.contentService.getContent('id').then((result) => {
      this.content = result;
      this.title.setTitle(result.title);
    });
    //get suggested carousel
    this.contentService.getSuggested('id').then((result) => {
      this.suggestedCarousel = result;
    });
    // get related carousel
    this.contentService.getRelated('id').then((result) => {
      this.relatedCarousel = result;
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
