import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrideComponent } from './pride.component';

describe('PrideComponent', () => {
  let component: PrideComponent;
  let fixture: ComponentFixture<PrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
