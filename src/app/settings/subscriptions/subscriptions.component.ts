import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IUserSubscription } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: IUserSubscription[] = [];
  viewSubscriptions: IUserSubscription[] = [];
  SIZE_PAGE = 2;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getSUbscriptions().then((result) => {
      this.subscriptions = result;
      this.viewSubscriptions = this.subscriptions.slice(0,2);
    });
  }

  changePage(event: PageEvent): void {
    const first = event.pageIndex * this.SIZE_PAGE;
    const last =  event.pageIndex * this.SIZE_PAGE + this.SIZE_PAGE;
    const lastPage = last > this.subscriptions.length ? event.pageIndex * this.SIZE_PAGE + last - this.subscriptions.length : last;
   this.viewSubscriptions = this.subscriptions.slice(first, lastPage);
  }
}
