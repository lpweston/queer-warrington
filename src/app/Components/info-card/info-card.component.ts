import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GroupInfo, SocialInfo } from '../../types';

@Component({
    selector: 'app-info-card',
    imports: [
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './info-card.component.html',
    styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() group!: GroupInfo;
  
  getTooltip(link: SocialInfo): string|null|undefined {
    return String(link.link)
  }
}
