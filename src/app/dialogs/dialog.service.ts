import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeviceType } from '../services/devices/models/devices';
import { IUserInfoResponse } from '../services/user/models/user';
import { EditUserComponent } from './edit-user/edit-user.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { DialogType } from './yes-no-ok/dialog';
import { YesNoOkComponent } from './yes-no-ok/yes-no-ok.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Open link device dialog
   * @returns 
   */
  openLinkDeviceDialog(): MatDialogRef<LinkDeviceComponent> {
    return  this.dialog.open(LinkDeviceComponent, {
      panelClass: 'card-panel-class-container',
      backdropClass: 'card-panel-class-backdrop',
    });
  }

  /**
   * Open edit user dialog
   * @param user 
   * @returns 
   */
  openEditUser(user?: IUserInfoResponse): MatDialogRef<EditUserComponent>  {
    return this.dialog.open(EditUserComponent, {
      data: user,
      panelClass: 'card-panel-class-container',
      backdropClass: 'card-panel-class-backdrop',
      maxWidth: '40%',
      width: '30%'
    });
  }

  /**
   * Open a renew plan yes no dialog
   * @returns 
   */
  openRenewPlan(): MatDialogRef<YesNoOkComponent> {
    return this.openYesNoDialog(
      'Renew Plan',
      'Do you want renew your plan?'
    );
  }

  /**
   * Open a renew plan yes no dialog
   * @returns 
   */
   openCancelPlan(): MatDialogRef<YesNoOkComponent> {
    return this.openYesNoDialog(
      'Cancel Plan',
      'Do you want cancel your plan?'
    );
  }

  /**
   * Open a change device name dialog input
   * @returns 
   */
  openChangeDeviceName(deviceType: DeviceType): MatDialogRef<InputDialogComponent> {
    return this.dialog.open(InputDialogComponent, {
      data: {
        title: 'Change Device Name',
        placeholder: 'Device Name',
        btnText: 'Guardar',
        type: deviceType,
      },
      panelClass: 'card-panel-class-container',
      backdropClass: 'card-panel-class-backdrop',
    });
  }

  /**
   * Open a remove device yes no dialog
   * @returns 
   */
   openRemoveDevice(): MatDialogRef<YesNoOkComponent> {
    return this.openYesNoDialog(
      'Remove Device',
      'Do you want remove your device?'
    );
  }

  /**
   * Open a yes-no-ok dialog
   * @returns 
   */
  private openYesNoDialog(title: string, message: string): MatDialogRef<YesNoOkComponent> {
    return this.dialog.open(YesNoOkComponent, {
      data: {
        type: DialogType.YESNO,
        title,
        message
      },
      panelClass: 'card-panel-class-container',
      backdropClass: 'card-panel-class-backdrop',
    });
  }
}
