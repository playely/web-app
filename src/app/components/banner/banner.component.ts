import { Component, Input } from '@angular/core';
import { IContentList } from '@models/IContentList';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIf, RouterModule, NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() contentList: IContentList | undefined;
  selectedContentIndex = 0;
  swipeCoord?: number[];
  next() {
    if (!this.contentList) return;
    if (this.selectedContentIndex+1 < this.contentList.contents.length) {
      this.selectedContentIndex++;
    } else {
      this.selectedContentIndex = 0;
    }
  }

  previous() {
    if (!this.contentList) return;
    if (this.selectedContentIndex - 1 >= 0) {
      this.selectedContentIndex--;
    } else {
      this.selectedContentIndex = this.contentList.contents.length -1;
    }
  }

  select(index: number) {
    this.selectedContentIndex = index;
  }

  swipe(event: TouchEvent) {
    const coord: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
    if (event.type == 'touchstart') {
      this.swipeCoord = coord;
     } else if (event.type == 'touchend' && this.swipeCoord) {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      // do not change if the touch size is less than the screen 3part
      if (Math.abs(direction[0]) < window.innerWidth / 3) return; 
      if (direction[0] < 0) {
        //next
       this.next();
       } else {
        //previous
        this.previous();
       }
     }
  }
}
