import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  ticks = 10;
  interval: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.ticks > 0) {
        this.ticks--;
      } else {
        this.router.navigate(['/home']);
        clearInterval(this.interval);
      }
    },1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
