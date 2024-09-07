import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import listPlugin from '@fullcalendar/list';
import { GroupInfo, SocialInfo, groups, socials, companies } from './groups.constants';
import { getCalendar } from '../../events/events.utils';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  groups: GroupInfo[] = groups;
  socials: SocialInfo[] = socials;
  companies: SocialInfo[] = companies;
  readonly dialog = inject(MatDialog);

  ngOnInit() {
  const calendarListEl = document.getElementById('calendar-list-home');

    if (calendarListEl) {
      const calendarList = getCalendar(calendarListEl, listPlugin, 'listMonth', this.dialog, true, true)
      calendarList.render();

      (document.querySelector('#calendar-list-home .fc-header-toolbar') as HTMLElement).style.margin = "0 10px 10px 10px";
    }
  }
}