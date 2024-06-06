import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  clockInterval: any;
  deviceInfo?: DeviceInfo;

  constructor(private deviceService: DeviceDetectorService){}

  ngOnInit(): void {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.clockInterval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  }


  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
  }

}
