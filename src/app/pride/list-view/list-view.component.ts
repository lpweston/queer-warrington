import { Component, Input, OnInit } from '@angular/core';
import { PrideEvent, WarringtonLocation } from '../pride2025.constants';
import { MatCardModule } from '@angular/material/card';
import { getEventsByLocation } from '../data.util';
import { KeyValuePipe } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [MatCardModule, EventCardComponent, KeyValuePipe],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements OnInit{
  @Input() events!: PrideEvent[];
  locations: Map<WarringtonLocation, PrideEvent[]> | undefined;

  ngOnInit(): void {
    this.locations = getEventsByLocation(this.events);
  }
}
