import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IUserSubscription } from 'src/app/services/subscriptions/models/subscriptions';
import { SubscriptionsService } from 'src/app/services/subscriptions/subscriptions.service';
import { DialogService } from '../../../dialogs/dialog.service';
import { DialogReturn } from '../../../dialogs/yes-no-ok/dialog';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: IUserSubscription[] = [];
  viewSubscriptions: IUserSubscription[] = [];
  SIZE_PAGE = 2;
  constructor(private subService: SubscriptionsService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.subService.getSUbscriptions().then((result) => {
      this.subscriptions = result;
      this.viewSubscriptions = this.subscriptions.slice(0,2);
    });
  }

  changePlan(): void {

  }

  renewPlan(): void {
    this.dialogService.openRenewPlan().afterClosed().subscribe((response) => {
      if (response === DialogReturn.YES) {
        // renew plan
        console.log('Renew plan');
      }
    });
  }

  cancelPlan(): void {
    this.dialogService.openCancelPlan().afterClosed().subscribe((response) => {
      if (response === DialogReturn.YES) {
        // cancel plan
        console.log('Cancel plan');
      }
    });
  }

  /**
   * Manage paginator event
   *
   * @param event 
   */
  changePage(event: PageEvent): void {
    const first = event.pageIndex * this.SIZE_PAGE;
    const last =  event.pageIndex * this.SIZE_PAGE + this.SIZE_PAGE;
    const lastPage = last > this.subscriptions.length ? event.pageIndex * this.SIZE_PAGE + last - this.subscriptions.length : last;
   this.viewSubscriptions = this.subscriptions.slice(first, lastPage);
  }
}
