import { Injectable } from '@angular/core';
import { DeviceType, IDevice } from './models/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  /**
   * Get all devices
   * @returns 
   */
  getDevices(): Promise<IDevice[]> {
    return Promise.resolve([
      {
        id: '1', 
        serial: '1',
        name: 'web',
        type: DeviceType.WEB,
        enrollDate: new Date(),
        status: true,
        isCurrentDevice: true,
      },
      {
        id: '1', 
        serial: '1',
        name: 'web',
        type: DeviceType.WEB,
        enrollDate: new Date(),
        status: true,
        isCurrentDevice: false,
      },
      {
        id: '2', 
        serial: '2',
        name: 'mobile',
        type: DeviceType.MOBILE,
        enrollDate: new Date(),
        status: true,
        isCurrentDevice: false,
      },
      {
        id: '6', 
        serial: '6',
        name: 'smart-tv',
        type: DeviceType.SMART_TV,
        enrollDate: new Date(),
        status: false,
        isCurrentDevice: false,
      },
      {
        id: '3', 
        serial: '3',
        name: 'mobile-web',
        type: DeviceType.MOBILE_WEB,
        enrollDate: new Date(),
        status: true,
        isCurrentDevice: false,
      },
      {
        id: '4', 
        serial: '4',
        name: 'smart-tv',
        type: DeviceType.SMART_TV,
        enrollDate: new Date(),
        status: true,
        isCurrentDevice: false,
      },
      {
        id: '5', 
        serial: '5',
        name: 'smart-tv',
        type: DeviceType.SMART_TV,
        enrollDate: new Date(),
        status: false,
        isCurrentDevice: false,
      },
    ]);
  }
}
