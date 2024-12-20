import { Component, OnInit } from '@angular/core';
import { PrideEvent, test, WarringtonLocation } from '../pride2024.constants';
import { MatCardModule } from '@angular/material/card';
import { TooltipComponent } from "../tooltip/tooltip.component";
import { getEventsByLocation } from '../data.util';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [MatCardModule, TooltipComponent, KeyValuePipe],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  locations: Map<WarringtonLocation, PrideEvent[]> | undefined;

  constructor() {
    this.locations = getEventsByLocation(test);
  }
}
