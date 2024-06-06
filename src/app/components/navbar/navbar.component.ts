import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { IRoute } from '@models/IRoute';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IUser } from '@models/IUser';
import { UserService } from '@services/user.service';

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
  @Input() showAll: boolean = true;
  @Output() toggleMenu = new EventEmitter();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  user?: IUser;
    constructor(private router: Router, private userService: UserService){
      this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event: any) => {
        if (event instanceof NavigationStart && this.isMenuOpen) {
          this.toggleMenu.emit();
      }
    });

    this.userService.userChange.pipe(takeUntil(this.destroyed$)).subscribe((user: IUser | undefined) => {
        this.user = user;
      });
    }

    ngOnDestroy(): void {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    }

    logout(): void {
      this.userService.logout();
      this.router.navigate(['']);
    }

}
