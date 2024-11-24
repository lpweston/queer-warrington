import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SocialInfo } from '../../home/groups/groups.constants';

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
}
