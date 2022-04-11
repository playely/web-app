import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/services/tabs/models/tab.model';
import { TabService } from 'src/app/services/tabs/tab.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: ITab[] = [];
  constructor(private tabService: TabService) { }

  ngOnInit(): void {
    this.tabService.getTabs().then((tabs) => {
      this.menuItems = tabs;
    });
  }

}
