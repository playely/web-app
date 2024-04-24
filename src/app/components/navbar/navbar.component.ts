import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { IRoute } from '@models/IRoute';
import { ReplaySubject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  @Input() routes: IRoute[] = [];
  @Input() isMenuOpen: boolean = false;
  @Input() navbarMode: string = 'gradient';
  @Output() toggleMenu = new EventEmitter();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private router: Router){
      this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event: any) => {
        if (event instanceof NavigationStart && this.isMenuOpen) {
          this.toggleMenu.emit();
      }
    });
    }

    ngOnDestroy(): void {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    }

}
