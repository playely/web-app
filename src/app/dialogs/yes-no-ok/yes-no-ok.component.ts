import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogReturn, DialogType } from './dialog';

export interface YesNoOkDialogData {
  type: DialogType;
  title: string;
  message: string;
}
@Component({
  selector: 'app-yes-no-ok',
  templateUrl: './yes-no-ok.component.html',
  styleUrls: ['./yes-no-ok.component.scss']
})
export class YesNoOkComponent implements OnInit {
  title: string = '';
  message: string = '';
  isOkDialog = true;

  get dialogReturn() { return DialogReturn; }
  constructor(public dialogRef: MatDialogRef<YesNoOkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoOkDialogData) { 
      this.title = this.data.title;
      this.message = this.data.message;
      this.isOkDialog = this.data.type === DialogType.OK;
    }

  ngOnInit(): void {
  }



}
