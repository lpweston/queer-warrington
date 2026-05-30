import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PrideEvent } from '../pride2026.constants';

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
