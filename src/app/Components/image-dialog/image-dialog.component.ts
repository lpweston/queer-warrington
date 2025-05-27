import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PrideEvent } from '../../pride/pride2025.constants';

@Component({
    selector: 'app-image-dialog',
    imports: [],
    templateUrl: './image-dialog.component.html',
    styleUrl: './image-dialog.component.scss'
})
export class ImageDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
  readonly data = inject<PrideEvent>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}