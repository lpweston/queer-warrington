import { Component, Input, OnInit } from '@angular/core';
import { PrideEvent, WarringtonLocation } from '../2025/pride2025.constants';
import { MatCardModule } from '@angular/material/card';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
    selector: 'app-list-view',
    imports: [MatCardModule, EventCardComponent],
    templateUrl: './list-view.component.html',
    styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements OnInit{
  @Input() events!: PrideEvent[];
  @Input() showDate = false;
  locations: Map<WarringtonLocation, PrideEvent[]> | undefined;

  ngOnInit(): void {
  }
}
