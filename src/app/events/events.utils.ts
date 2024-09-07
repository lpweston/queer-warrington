import { Calendar, FormatterInput, PluginDef, ToolbarInput } from '@fullcalendar/core/index.js';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { APIKey, CalendarAddress } from '../constants';
import { EventInfoComponent } from './event-info/event-info.component';
import { MatDialog } from '@angular/material/dialog';

export interface EventData {
  name: string;
  description: string;
  location: string;
  start: Date | undefined;
  end: Date | undefined;
}

export const setNavigateCalendarButton = (buttonSelector: string, calendar: Calendar, next: boolean): void => {
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

export const getCalendar = ( calendarEl: HTMLElement, plugin: PluginDef, initialView: string, dialog: MatDialog, headerToolbar: boolean = false, titleFormat: boolean = false) => {
  return new Calendar(calendarEl, {
    plugins: [
      googleCalendarPlugin,
      plugin,
    ],
    initialView: initialView,
    contentHeight: 'auto',
    googleCalendarApiKey: APIKey,
    events: {
      googleCalendarId: CalendarAddress
    },
    headerToolbar: headerToolbar? customHeaderToolbar : undefined,
    titleFormat: titleFormat? customTitleFormat: undefined,
    eventClick: (info) => clickEvent(info, dialog)
  });
}

export const customHeaderToolbar: ToolbarInput = {
  start: 'title', // will normally be on the left. if RTL, will be on the right
  center: '',
  end: 'prev,next' // will normally be on the right. if RTL, will be on the left
}

export const customTitleFormat: FormatterInput = { month: 'long' }

const clickEvent = (info: any, dialog: MatDialog) => {
  info.jsEvent.preventDefault();

  const def = info?.event?._def;
  const props = def?.extendedProps;
  const instance = info?.event?._instance;
  if (props) {
    const data: EventData = {
      name: def.title,
      description: props['description'],
      location: props['location'],
      start: instance?.range?.start,
      end: instance?.range?.end
    }
    
    const dialogRef = dialog.open(EventInfoComponent, {data});
    
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  };
}