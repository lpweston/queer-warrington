import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { groups, socials, companies, supportServices, charities, friendly } from './groups.constants';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoCardComponent } from '../../Components/info-card/info-card.component';
import { InfoCardListComponent } from '../../Components/info-card-list/info-card-list.component';
import { GroupInfo, SocialInfo } from '../../types';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    InfoCardComponent,
    InfoCardListComponent
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  groups: GroupInfo[] = groups;
  supportServices: GroupInfo[] = supportServices;
  socials: SocialInfo[] = socials;
  companies: GroupInfo[] = companies;
  charities: SocialInfo[] = charities;
  friendly: SocialInfo[] = friendly;
  readonly dialog = inject(MatDialog);
}