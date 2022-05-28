import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DialogService } from 'src/app/dialogs/dialog.service';
import { DialogReturn } from 'src/app/dialogs/yes-no-ok/dialog';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { DeviceType, IDevice } from 'src/app/services/devices/models/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: IDevice[] = [];
  viewDevices: IDevice[] = [];
  SIZE_PAGE = 2;
  constructor(private deviceService: DevicesService, private dialogService: DialogService) { }

  get DeviceType() {
    return DeviceType;
  }

  ngOnInit(): void {
    this.deviceService.getDevices().then((result) => {
      this.devices = result;
      this.viewDevices = this.devices.slice(0,this.SIZE_PAGE);
    });
  }

  removeDevice(): void {
    this.dialogService.openRemoveDevice().afterClosed().subscribe((result) => {
      if (result === DialogReturn.YES) {
        console.log(' remove device');
      }
    });
  }

  changeDeviceName(device: IDevice): void {
    this.dialogService.openChangeDeviceName(device.type);
  }


  /**
   * Manage paginator event
   *
   * @param event 
   */
   changePage(event: PageEvent): void {
    const first = event.pageIndex * this.SIZE_PAGE;
    const last =  event.pageIndex * this.SIZE_PAGE + this.SIZE_PAGE;
    const lastPage = last > this.devices.length ? event.pageIndex * this.SIZE_PAGE + last - this.devices.length : last;
   this.viewDevices = this.devices.slice(first, lastPage);
  }
}
