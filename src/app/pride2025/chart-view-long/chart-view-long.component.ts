import { Component, inject, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { PrideEvent, scheduledEvents } from '../pride2025.constants';
import { getListOfLocations } from '../data.util';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../../Components/info-dialog/info-dialog.component';

@Component({
  selector: 'app-chart-view-long',
  imports: [MatButtonModule],
  templateUrl: './chart-view-long.component.html',
  styleUrl: './chart-view-long.component.scss'
})
  export class ChartViewLongComponent implements OnInit {
  selectedEvent: PrideEvent | undefined;
  
  readonly dialog = inject(MatDialog);

  private width = this.getChartWidth();
  private height = this.getChartHeight();
  private marginLeft = 35;
  private marginTop = 40;
  private marginInnerLeft = 30;
  private marginBottom = 10;

  private colors = ["red", "orange", "gold", "green", "blue", "purple"]
  private colorIdx = 0;

  private startDate = new Date("2025-06-14T10:00");
  private endDate = new Date("2025-06-15T02:00");

  private chart: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | undefined;
  private yAxis!: d3.ScaleTime<number, number, never>;
  private xAxis!: d3.ScaleOrdinal<string, number, never>;
  private bars!: d3.Selection<d3.BaseType, PrideEvent, SVGGElement, unknown>;

  ngOnInit() {
    this.initScales();
    this.initSvg();
    this.drawAxis();
    this.addData();
    this.initDialog();
  }

  private initScales() {
    const locations = getListOfLocations(scheduledEvents);
    this.xAxis = d3.scaleOrdinal()
              .domain([...locations])
              .range(this.getLocationsRange(locations.length)) as d3.ScaleOrdinal<string, number, never>;
    
    this.yAxis = d3.scaleUtc()
                   .domain([this.startDate , this.endDate])
                   .range([this.marginTop, this.height - this.marginBottom]);
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
      .attr("transform", `translate(${this.marginLeft},0)`)
      .attr("stroke-width", 0.5)
      .attr("class", "yAxis")
      .call(d3.axisLeft(this.yAxis).tickSize(-this.width + this.marginLeft + this.marginInnerLeft).ticks(20));

      this.chart.append("g")
      .attr("transform", `translate(0,${this.marginTop})`)
      .attr("stroke-width", 0.5)
      .attr("class", "xAxis")
      .call(d3.axisTop(this.xAxis).tickSize(-this.height + this.marginBottom + this.marginTop));

      var insertLinebreaks = function (t: any, d: any, width: any) {
        var el = d3.select(t);
        var p = d3.select(t.parentNode);
        p.append("foreignObject")
            .attr('x', -width/2)
            .attr('y', - 35)
            .attr("width", width)
            .attr("height", 50)
          .append("xhtml:p")
            .attr('style','word-wrap: break-word; text-align:center;')
            .html(d);    
        el.remove();

    };
    d3.select('.xAxis')
        .selectAll('text')
            .each(function(d,i){ insertLinebreaks(this, d, 55 ); });
        }
    }

    private addData() {
      if (this.chart){
        this.bars = this.chart.append("g")
                  .attr("class", "bars")
                  .selectAll("rect")
                  .data(scheduledEvents)
                  .join("rect")
                  .attr("x", d => this.xAxis(d.location) -10)
                  .attr("y", d => this.yAxis(d.start) + 28)
                  .attr("height", d => this.getHeightOfBar(d.start, d.end))
                  .attr("width", 20)
                  .attr("fill", d => this.getNextColor())  
      }
    }
    
    private initDialog() {
      this.bars.on("click", (event: MouseEvent, d: PrideEvent)=>{
                    this.openDialog(d);
                });  
      }
  
    private openDialog(selectedEvent: PrideEvent) {
        this.dialog.open(InfoDialogComponent, { data: {
          name: selectedEvent.name,
          description: selectedEvent.description,
          location: selectedEvent.location,
          link: selectedEvent.link,
          start: selectedEvent.start,
          end: selectedEvent.end,
        } 
      })
    }
          
    private getLocationsRange(locationsCount: number): number[] {
      const space = this.width - this.marginLeft - this.marginInnerLeft;
      const step = space / locationsCount;
      const a = [this.marginLeft+this.marginInnerLeft]
      for (let i = 1; i < locationsCount; i++) {
        a.push(a[i-1] + step);
      }
      return a;
    }

    private getHeightOfBar(start: Date, end: Date): number {
      const height = this.height - this.marginTop - this.marginBottom;
      const heightOfMS = height / (this.endDate.valueOf() - this.startDate.valueOf());
      return (end.valueOf() - start.valueOf()) * heightOfMS;
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
      return w - (w*0.1) - 20;
    }

    private getChartHeight() {
      return 500;
    }
}
