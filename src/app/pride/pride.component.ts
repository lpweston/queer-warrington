import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { test, WarringtonLocation } from './pride2024.constants';

@Component({
  selector: 'app-pride',
  standalone: true,
  imports: [],
  templateUrl: './pride.component.html',
  styleUrl: './pride.component.scss'
})
export class PrideComponent implements OnInit {
  // Declare the chart dimensions and margins.
  private width = 1200;
  private height = 400;
  private marginTop = 20;
  private marginRight = 20;
  private marginBottom = 30;
  private marginLeft = 150;

  private colors = ["red", "orange", "gold", "green", "blue", "purple"]
  private colorIdx = 0;

  private startDate = new Date("2024-06-08T08:00");
  private endDate = new Date("2024-06-09T03:00");

  ngOnInit() {
    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc()
        .domain([this.startDate , this.endDate])
        .range([this.marginLeft, this.width - this.marginRight]);

    const locations = Object.values(WarringtonLocation).map(v => v.toString());
    const y = d3.scaleOrdinal()
              .domain([...locations])
              .range(this.getLocationsRange(locations.length)) as d3.ScaleOrdinal<string, number, never>;

    // Create the SVG container.
    const dataGroup = d3.select("#chart")
        .attr("width", this.width)
        .attr("height", this.height);
        
        // x-axis
        dataGroup.append("g")
        .attr("transform", `translate(0,${this.height - this.marginBottom})`)
        .call(d3.axisBottom(x));
        
        // y-axis
        dataGroup.append("g")
        .attr("transform", `translate(${this.marginLeft},0)`)
        .call(d3.axisLeft(y));

        // data
        dataGroup.append("g")
            .attr("class", "bars")
            .selectAll("rect")
            .data(test)
            .join("rect")
            .attr("x", d => x(d.start))
            .attr("y", d => y(d.location) -10)
            .attr("width", d => this.getWidthOfBar(d.start, d.end))
            .attr("height", 20)
            .attr("fill", d => this.getNextColor());
    }

    private getLocationsRange(locationsCount: number): number[] {
      const space = this.height - this.marginTop;
      const step = space / locationsCount;
      const a = [this.marginTop]
      for (let i = 1; i < locationsCount; i++) {
        a.push(a[i-1] + step);
      }
      return a;
    }

    private getWidthOfBar(start: Date, end: Date): number {
      const widthOfMS = this.width / (this.endDate.valueOf() - this.startDate.valueOf());
      return (end.valueOf() - start.valueOf()) * widthOfMS;
    }

    private getNextColor() {
      const color = this.colors[this.colorIdx++];
      if (this.colorIdx >= this.colors.length) {
        this.colorIdx = 0;
      }
      return color;
    }
}
