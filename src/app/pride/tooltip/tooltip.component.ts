import { Component, Input } from '@angular/core';
import { PrideEvent } from '../2025/pride2025.constants';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-tooltip',
    imports: [MatCardModule],
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() event:PrideEvent | undefined;
  regex = /\:\d+$/gm;
}
