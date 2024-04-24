import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContentService } from '@services/content.service';
import { CardTitleComponent } from '@components/card-title/card-title.component';
import { TMDBGenre } from '@models/tmdb/TMDBGenre';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { NgIf } from '@angular/common';
import { CardGridComponent } from '@components/card-grid/card-grid.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, CardTitleComponent, ReactiveFormsModule, NgIf, CardGridComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  collectionMovies:TMDBGenre[] = [];
  collectionTv:TMDBGenre[] = [];
  searchControl: FormControl = new FormControl();
  results?: TMDBDetails[];
  resultsPage = 1;
  resultsTotalPages = 1;
  noResults  = false;

  constructor(private contentService: ContentService) {
    Promise.all([this.contentService.getMovieGenres(), this.contentService.getSeriesGenres()]).then((values)=> {
     if (values[0].genres) this.collectionMovies = values[0].genres.slice(0, 8);
     if (values[1].genres) this.collectionTv = values[1].genres.slice(0, 8);
    });
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(text=> {
        this.contentService.getSearchResults(text).then((res)=> {
          this.noResults = false;
          if (res.total_results > 0) {
            this.results = res.results;
            this.resultsPage = res.page;
            this.resultsTotalPages = res.total_pages;
          } else {
            this.results = undefined;
            this.noResults = true;
          }
        });
      });
  }

  get noSearchResults() {
    return this.results === undefined || this.results === null;
  }
}
