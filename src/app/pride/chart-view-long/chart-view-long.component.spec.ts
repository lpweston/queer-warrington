import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartViewLongComponent } from './chart-view-long.component';

describe('ChartViewLongComponent', () => {
  let component: ChartViewLongComponent;
  let fixture: ComponentFixture<ChartViewLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartViewLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartViewLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
