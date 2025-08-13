import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { EventData } from '../../types';
import { ConvertToLinkPipe } from "../../convert-to-link.pipe";

@Component({
    selector: 'app-info-dialog',
    imports: [
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogClose,
        MatIcon,
        DatePipe,
        ConvertToLinkPipe
    ],
    templateUrl: './info-dialog.component.html',
    styleUrl: './info-dialog.component.scss'
})
export class InfoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<InfoDialogComponent>);
  readonly data = inject<EventData>(MAT_DIALOG_DATA);
  offset:number = (new Date().getTimezoneOffset());

  onNoClick(): void {
    this.dialogRef.close();
  }

  showTime(data: EventData): boolean {

    if (data.start?.getHours() == 1) {
      return false;
    }
    return true;
  }
}