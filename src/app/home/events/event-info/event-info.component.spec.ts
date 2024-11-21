import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoComponent } from './event-info.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('EventInfoComponent', () => {
  let component: EventInfoComponent;
  let fixture: ComponentFixture<EventInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventInfoComponent, MatDialogModule],
      providers: [
        { provide: MatDialogRef,useValue: {} },
        { provide: MAT_DIALOG_DATA,useValue: {} }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
