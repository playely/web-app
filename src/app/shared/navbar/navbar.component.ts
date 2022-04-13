import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ITab } from 'src/app/services/tabs/models/tab.model';
import { TabService } from 'src/app/services/tabs/tab.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() isCover: boolean = false;

  menuItems: ITab[] = [];
  constructor(private tabService: TabService) { }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let element = document.querySelector('.navbar-container') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }
  ngOnInit(): void {
    this.tabService.getTabs().then((tabs) => {
      this.menuItems = tabs;
    });
  }

}
