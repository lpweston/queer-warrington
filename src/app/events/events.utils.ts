import { Calendar, FormatterInput, PluginDef, ToolbarInput } from '@fullcalendar/core/index.js';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { APIKey, CalendarAddress } from '../constants';

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

export const getCalendar = ( calendarEl: HTMLElement, plugin: PluginDef, initialView: string, headerToolbar: boolean = false, titleFormat: boolean = false) => {
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
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

      if (info?.event?._def?.extendedProps) {
        // open up a dialog and display 'description', 'location', date and time 
        //info?.event?._def?.extendedProps?['description']
      }
    }
  });
}

export const customHeaderToolbar: ToolbarInput = {
  start: 'title', // will normally be on the left. if RTL, will be on the right
  center: '',
  end: 'prev,next' // will normally be on the right. if RTL, will be on the left
}

export const customTitleFormat: FormatterInput = { month: 'long' }
