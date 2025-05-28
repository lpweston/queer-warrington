import { Component } from '@angular/core';
import { ChartViewComponent } from "./chart-view/chart-view.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { allDayEvents, eventsAroundPride, scheduledEvents } from './pride2025.constants';
import { ChartViewLongComponent } from './chart-view-long/chart-view-long.component';

@Component({
    selector: 'app-pride',
    imports: [ChartViewComponent, ListViewComponent, MatIconModule, MatButtonModule, MatButtonToggleModule, ChartViewLongComponent],
    templateUrl: './pride.component.html',
    styleUrl: './pride.component.scss'
})
export class PrideComponent {
  scheduled = scheduledEvents;
  aroundPride = eventsAroundPride;
  allday = allDayEvents;
  viewStyle = 'chart';
  screenSmall = window.innerWidth < 790;
}
