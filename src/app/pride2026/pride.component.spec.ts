import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pride2026Component } from './pride.component';

describe('Pride2026Component', () => {
  let component: Pride2026Component;
  let fixture: ComponentFixture<Pride2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pride2026Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pride2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
