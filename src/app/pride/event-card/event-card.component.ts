import { Component, inject, Input } from '@angular/core';
import { PrideEvent } from '../pride2025.constants';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../../Components/image-dialog/image-dialog.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  readonly dialog = inject(MatDialog);
  @Input() event:PrideEvent | undefined;
  @Input() showDate = true;
  regex = /\:\d+$/gm;

    openDialog(item: PrideEvent) {
      this.dialog.open(ImageDialogComponent, { data: item });
    }
}
