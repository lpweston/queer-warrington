import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import { APIKey, CalendarAddress } from '../constants';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
//TODO events on click should not take you to google calendar

 ngOnInit(){
  const calendarEl = document.getElementById('calendar');
  const calendarListEl = document.getElementById('calendar-list');
  let calendar: Calendar | null = null; 
  let calendarList: Calendar | null = null;

  if (calendarEl) {
    calendar = new Calendar(calendarEl, {
      plugins: [
        googleCalendarPlugin,
        dayGridPlugin,
      ],
      initialView: 'dayGridMonth',
      contentHeight: 'auto',
      googleCalendarApiKey: APIKey,
      events: {
        googleCalendarId: CalendarAddress
      },
      eventClick: function(info) {
        info.jsEvent.preventDefault(); // don't let the browser navigate

        if (info.event.url) {
          window.open(info.event.url);
        }
      }
    });
    
    calendar.render();
  }

  if (calendarListEl) {
    calendarList = new Calendar(calendarListEl, {
      plugins: [
        googleCalendarPlugin,
        listPlugin
      ],
      initialView: 'listMonth',
      googleCalendarApiKey: APIKey,
      events: {
        googleCalendarId: CalendarAddress
      },
      contentHeight: 'auto',
      eventClick: function(info) {
        info.jsEvent.preventDefault(); // don't let the browser navigate

        if (info.event.url) {
          window.open(info.event.url);
        }
      }
    });
    
    calendarList.render();
  }

  if (calendar && calendarList){
    this.setEvent('#calendar .fc-next-button', calendarList, true);
    this.setEvent('#calendar .fc-prev-button', calendarList, false);
    this.setEvent('#calendar-list .fc-next-button', calendar, true);
    this.setEvent('#calendar-list .fc-prev-button', calendar, false);
  }

  
  (document.querySelector('#calendar-list .fc-header-toolbar') as HTMLElement).style.margin = "0 10px 10px 10px";
 }

 private setEvent(buttonSelector: string, calendar: Calendar, next: boolean): void {
  if (next) {
    document.querySelector(buttonSelector)?.addEventListener('click', () => {
      calendar?.next();
    });
  } else {
    document.querySelector(buttonSelector)?.addEventListener('click', () => {
      calendar?.prev();
    });
  }
 }
}
