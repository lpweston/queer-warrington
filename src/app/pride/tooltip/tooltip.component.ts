import { Component, Input } from '@angular/core';
import { PrideEvent } from '../pride2025.constants';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() event:PrideEvent | undefined;
  regex = /\:\d+$/gm;
}
