import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { EventData } from '../../types';

@Component({
  selector: 'app-info-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatIcon,
    DatePipe
  ],
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.scss'
})
export class InfoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<InfoDialogComponent>);
  readonly data = inject<EventData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}