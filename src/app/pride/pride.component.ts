import { Component } from '@angular/core';
import { ChartViewComponent } from "./chart-view/chart-view.component";
import { ListViewComponent } from "./list-view/list-view.component";

@Component({
  selector: 'app-pride',
  standalone: true,
  imports: [ChartViewComponent, ListViewComponent],
  templateUrl: './pride.component.html',
  styleUrl: './pride.component.scss'
})
export class PrideComponent {}
