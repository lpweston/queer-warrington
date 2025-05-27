import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GroupInfo } from '../../types';

@Component({
    selector: 'app-info-card',
    imports: [
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
    ],
    templateUrl: './info-card.component.html',
    styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() group!: GroupInfo;
}
