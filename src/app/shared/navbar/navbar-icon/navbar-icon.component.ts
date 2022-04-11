import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss']
})
export class NavbarIconComponent implements OnInit {
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
