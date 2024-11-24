import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GroupInfo, SocialInfo, groups, socials, companies, supportServices } from './groups.constants';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoCardComponent } from '../../Components/info-card/info-card.component';

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
    InfoCardComponent
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  groups: GroupInfo[] = groups;
  supportServices: GroupInfo[] = supportServices;
  socials: SocialInfo[] = socials;
  companies: SocialInfo[] = companies;
  readonly dialog = inject(MatDialog);
}