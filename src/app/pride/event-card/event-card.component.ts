import { Component, Input } from '@angular/core';
import { PrideEvent } from '../pride2025.constants';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() event:PrideEvent | undefined;
  regex = /\:\d+$/gm;
}
