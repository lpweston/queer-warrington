import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Calendar } from '@fullcalendar/core'
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import { getCalendar, setNavigateCalendarButton } from './events.utils';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
 ngOnInit(){
  const calendarEl = document.getElementById('calendar');
  const calendarListEl = document.getElementById('calendar-list');
  let calendar: Calendar | null = null; 
  let calendarList: Calendar | null = null;

  if (calendarEl) {
    calendar = getCalendar(calendarEl, dayGridPlugin, 'dayGridMonth')
    calendar.render();
  }

  if (calendarListEl) {
    calendarList = getCalendar(calendarListEl, listPlugin, 'listMonth')
    calendarList.render();
  }

  if (calendar && calendarList){
    setNavigateCalendarButton('#calendar .fc-next-button', calendarList, true);
    setNavigateCalendarButton('#calendar .fc-prev-button', calendarList, false);
    setNavigateCalendarButton('#calendar-list .fc-next-button', calendar, true);
    setNavigateCalendarButton('#calendar-list .fc-prev-button', calendar, false);
  }

  (document.querySelector('#calendar-list .fc-header-toolbar') as HTMLElement).style.margin = "0 10px 10px 10px";
 }
}
