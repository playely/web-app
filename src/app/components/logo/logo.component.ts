import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() isClickable = false;
  @Input() disableRedirection = false;
  @Input() width = '100%';

  constructor(private router: Router) { }

  redirect(): void {
    if (this.disableRedirection) return;
    this.router.navigateByUrl('/');
  }

}
