import { NgIf } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TMDBDetails } from '@models/tmdb/TMDBDetail';
import { CardComponent } from '@components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';

@Component({
  selector: 'app-series-block',
  standalone: true,
  imports: [NgIf, CardComponent, ReactiveFormsModule, ImageUrlPipe],
  templateUrl: './series-block.component.html',
  styleUrl: './series-block.component.scss'
})
export class SeriesBlockComponent implements OnInit {
  @Input() content?: TMDBDetails;
  @Output() changeSeason = new EventEmitter();
  season: FormControl = new FormControl(0);

  ngOnInit(): void {
    this.season.setValue(this.content?.current_season?.id);
  }

  onChange() {
      this.changeSeason.emit(this.season.value);
  }
}
