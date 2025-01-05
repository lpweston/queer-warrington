import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { EventInfoComponent } from '../../home/events/event-info/event-info.component';
import { SocialInfo } from '../../types';

@Component({
  selector: 'app-info-card-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './info-card-list.component.html',
  styleUrl: './info-card-list.component.scss'
})
export class InfoCardListComponent {
  @Input() items!: SocialInfo[];
  readonly dialog = inject(MatDialog);
  
  openDialog(item: SocialInfo) {
    this.dialog.open(EventInfoComponent, { data: {
      name: item.name,
      description: item.description,
      location: item.location,
      link: item.link,
    } 
  })
}
}
