import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Calendar } from '@fullcalendar/core/index.js';
import { APIKey, CalendarAddress } from '../../constants';
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import listPlugin from '@fullcalendar/list';

type GroupInfo = {
  name: string,
  subtitle:string,
  icon: string,
  imagePath: string,
  description: string
  link: string
}

type socialInfo = {
  name: string,
  link: string,
  icon: string
}

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  groups: GroupInfo[] = [
    {
      name: "Queer Coffee",
      subtitle: '18+',
      icon: 'queer-coffee-icon',
      imagePath: '/assets/images/queerCoffeePhoto.png',
      description: `This group started to be a queer safe place in the warrington area. It's a group for everyone: the shes/zies/theys/hes/zers and everyone in-between who is part of the LGBTQIA+ community.
          <br/>
          We meet up (at a minimum) on the last Saturday of each month at the Geek Retreat Warrington at 11.30 am. And are open to adding different locations and different activities on top of this.
          This group is for anyone aged 18 or over.`,
      link: 'https://linktr.ee/queercoffee'
    },
    {
      name: "Tags",
      subtitle: '11-17 and 17-24 years',
      icon: 'tags-icon',
      imagePath: '/assets/images/tagsIcon.jpg',
      description: `TAGS provides LGBTQ+ 1-2-1 targeted support or group support to young people aged 11-17 years (Youth TAGS) and 17-24 years.<br/>
            Tags provides a safe space for LGBTQ+ young people to meet, socialise, access support, and develop skills and confidence.<br/>
            Tags aims to empower young people to be active members of the group, to inspire them to pursue leading roles in the future - the group is entirely LGBTQ+ youth-led. to enable us to access additional funding to help support the group to provide additional opportunities for young people.`,
      link: 'https://www.warrington.gov.uk/node/11259'
    }
  ]

  socials: socialInfo[] = [
    {
      name: 'LGBT Warrington',
      link: 'https://www.facebook.com/groups/lgbtwarrington/',
      icon: '/assets/images/fb.png'
    },
    {
      name: 'Warrington LGBTQ+',
      link: 'https://www.facebook.com/groups/875204472503810/',
      icon: '/assets/images/fb.png'
    },
    {
      name:'Northern Lesbians',
      link:'https://www.facebook.com/groups/Nlesuk/',
      icon: '/assets/images/fb.png'
    }
  ]

  ngOnInit() {
  const calendarListEl = document.getElementById('calendar-list-home');

    if (calendarListEl) {
      const calendarList = new Calendar(calendarListEl, {
        plugins: [
          googleCalendarPlugin,
          listPlugin
        ],
        initialView: 'listMonth',
        googleCalendarApiKey: APIKey,
        events: {
          googleCalendarId: CalendarAddress
        },
        headerToolbar: {
          start: 'title', // will normally be on the left. if RTL, will be on the right
          center: '',
          end: 'prev,next' // will normally be on the right. if RTL, will be on the left
        },
        titleFormat: { month: 'long' },
        height: 'auto', 
      });
      
      calendarList.render();

      (document.querySelector('#calendar-list-home .fc-header-toolbar') as HTMLElement).style.margin = "0 10px 10px 10px";
    }
  }
}