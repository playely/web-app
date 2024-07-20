import { NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { CardComponent } from '@components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ImageUrlPipe } from '@pipes/image-url.pipe';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { TMDBSeason } from '@models/tmdb/TMDBSeason';
import { PrefixPipe } from '@pipes/prefix.pipe';
@Component({
  selector: 'app-series-block',
  standalone: true,
  imports: [
    NgIf, 
    CardComponent, 
    ReactiveFormsModule, 
    ImageUrlPipe,
    PrefixPipe,
    MatSelectModule, 
    MatFormFieldModule, 
    MatButtonModule
  ],
  templateUrl: './series-block.component.html',
  styleUrl: './series-block.component.scss'
})
export class SeriesBlockComponent implements OnInit {
  @ViewChild('series') seriesBlock?: ElementRef;
  @Input() seasons: TMDBSeason[] = [];
  @Input() currentSeason?: TMDBSeason;
  @Output() changeSeason = new EventEmitter();
  prevSeason?: TMDBSeason;
  nextSeason?: TMDBSeason;
  selectedSeason = new FormControl();
  showSeasonNumber: boolean = false;
  singleSeason: boolean = false;

  ngOnInit(): void {
    if (this.currentSeason) {
      this.showSeasonNumber = !this.currentSeason.name.toLowerCase().includes('season');
      this.singleSeason = this.seasons.length < 2;
      this.selectedSeason.setValue(this.currentSeason.id);
      this.setSeasonState(this.currentSeason.id);
    }
  }

  onSelectChange(id: number) {
    this.changeSeason.emit(id);
    this.setSeasonState(id);  
  }

  private setSeasonState(id: number) {
    this.prevSeason = undefined;
    this.nextSeason = undefined;
    const index = this.seasons.findIndex(item=>item.id === id); 
    if (index && index > 0) {
      this.prevSeason = this.seasons[index - 1];
    }
    if (index + 1 < this.seasons.length) {
      this.nextSeason = this.seasons[index + 1];
    }
  }

  onPreviousSeason() {
    if (!this.prevSeason) return;
    this.selectedSeason.setValue(this.prevSeason.id);
    this.onSelectChange(this.prevSeason.id);
    this.seriesBlock?.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

  onNextSeason() {
    if (!this.nextSeason) return;
    this.selectedSeason.setValue(this.nextSeason.id);
    this.onSelectChange(this.nextSeason.id);
    this.seriesBlock?.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
}
