import { Component, Input, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card';
import { EventCardComponent } from '../event-card/event-card.component';
import { PrideEvent, WarringtonLocation } from '../pride2026.constants';

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
