import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
      DialogType.YESNO,
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
      DialogType.YESNO,
      'Cancel Plan',
      'Do you want cancel your plan?'
    );
  }

  /**
   * Open a change device name dialog input
   * @returns 
   */
  openChangeDeviceName(): MatDialogRef<InputDialogComponent> {
    return this.dialog.open(InputDialogComponent, {
      data: {
        title: 'Change Device Name'
      }
    });
  }

  /**
   * Open a remove device yes no dialog
   * @returns 
   */
   openRemoveDevice(): MatDialogRef<YesNoOkComponent> {
    return this.openYesNoDialog(
      DialogType.YESNO,
      'Remove Device',
      'Do you want remove your device?'
    );
  }

  /**
   * Open a yes-no-ok dialog
   * @returns 
   */
  private openYesNoDialog(type: DialogType, title: string, message: string): MatDialogRef<YesNoOkComponent> {
    return this.dialog.open(YesNoOkComponent, {
      data: {
        type,
        title,
        message
      }
    });
  }
}
