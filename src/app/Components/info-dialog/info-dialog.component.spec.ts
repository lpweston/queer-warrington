import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDialogComponent } from './info-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('InfoDialogComponent', () => {
  let component: InfoDialogComponent;
  let fixture: ComponentFixture<InfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDialogComponent, MatDialogModule],
      providers: [
        { provide: MatDialogRef,useValue: {} },
        { provide: MAT_DIALOG_DATA,useValue: {} }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
