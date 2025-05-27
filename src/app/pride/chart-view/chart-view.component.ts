  import { Component, OnInit } from '@angular/core';
  import { TooltipComponent } from "../tooltip/tooltip.component";
  import * as d3 from 'd3';
  import { PrideEvent, scheduledEvents } from '../pride2025.constants';
  import { getListOfLocations } from '../data.util';
  import { MatButtonModule } from '@angular/material/button';
import { EventCardComponent } from "../event-card/event-card.component";

  @Component({
    selector: 'app-chart-view',
    imports: [TooltipComponent, MatButtonModule, EventCardComponent],
    templateUrl: './chart-view.component.html',
    styleUrl: './chart-view.component.scss'
})
  export class ChartViewComponent implements OnInit {
  // Declare the chart dimensions and margins.
  selectedEvent: PrideEvent | undefined;
  clickedEvent: PrideEvent | undefined;

  private width = this.getChartWidth();
  private height = 450;
  private marginTop = 30;
  private marginRight = 120;
  private marginBottom = 10;
  private marginLeft = 120;

  private colors = ["red", "orange", "gold", "green", "blue", "purple"]
  private colorIdx = 0;

  private startDate = new Date("2025-06-14T10:00");
  private endDate = new Date("2025-06-15T02:00");

  private chart: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | undefined;
  private xAxis!: d3.ScaleTime<number, number, never>;
  private yAxis!: d3.ScaleOrdinal<string, number, never>;
  private bars!: d3.Selection<d3.BaseType, PrideEvent, SVGGElement, unknown>;

  ngOnInit() {
    this.initScales();
    this.initSvg();
    this.drawAxis();
    this.addData();
    this.initTooltips();
  }

  private initScales() {
    // Declare the x (horizontal position) scale.
    this.xAxis = d3.scaleUtc()
    .domain([this.startDate , this.endDate])
    .range([this.marginLeft, this.width - this.marginRight]);

    const locations = getListOfLocations(scheduledEvents);
    this.yAxis = d3.scaleOrdinal()
              .domain([...locations])
              .range(this.getLocationsRange(locations.length)) as d3.ScaleOrdinal<string, number, never>;
  }

  private initSvg() {
    // Create the SVG container.
    this.chart = d3.select("#chart")
    .attr("width", this.width)
    .attr("height", this.height);
  }

  private drawAxis() {
    if (this.chart){
      this.chart.append("g")
      .attr("transform", `translate(0,${this.height - this.marginBottom})`)
      .call(d3.axisBottom(this.xAxis).tickSize(-this.height + this.marginBottom + this.marginTop).ticks(20));
      this.chart.append("g")
      .attr("transform", `translate(${this.marginLeft},0)`)
      .attr("stroke-width", 0.5)
      .call(d3.axisLeft(this.yAxis).tickSize(-this.width + this.marginLeft + this.marginRight));

      this.chart.append("g")
      .attr("transform", `translate(0,0)`)
      .call(d3.axisTop(this.xAxis).tickSize(-this.height + this.marginBottom + this.marginTop).ticks(20));
      this.chart.append("g")
      .attr("transform", `translate(${this.width - this.marginRight},0)`)
      .attr("stroke-width", 0.5)
      .call(d3.axisRight(this.yAxis).tickSize(-this.width + this.marginLeft + this.marginRight));
    }
    }

    private addData() {
      if (this.chart){
        this.bars = this.chart.append("g")
                  .attr("class", "bars")
                  .selectAll("rect")
                  .data(scheduledEvents)
                  .join("rect")
                  .attr("x", d => this.xAxis(d.start))
                  .attr("y", d => this.yAxis(d.location) -10)
                  .attr("width", d => this.getWidthOfBar(d.start, d.end))
                  .attr("height", 20)
                  .attr("fill", d => this.getNextColor())  
      }
    }
    
  private initTooltips() {
    this.bars.on("mouseover", ()=>{
                d3.select('.chart-tooltip').style("display", null)
                })
              .on("mouseout", ()=>{
                d3.select('.chart-tooltip').style("display", "none")
              })
              .on("mousemove", (event: MouseEvent, d: PrideEvent)=>{
                d3.select('.chart-tooltip')
                  .style("left", event.pageX + 15 + "px")
                  .style("top", event.pageY - 25 + "px")
                  this.selectedEvent = d;
              });  

    this.bars.on("click", (event: MouseEvent, d: PrideEvent)=>{
                  this.clickedEvent = d;
              });  
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

    private getChartWidth(): number {
      const w = window.innerWidth
      return w - (w*0.1) - 120 - 450;
    }
  }
