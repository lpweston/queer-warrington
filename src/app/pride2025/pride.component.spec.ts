import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pride2025Component } from './pride.component';

describe('Pride2025Component', () => {
  let component: Pride2025Component;
  let fixture: ComponentFixture<Pride2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pride2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pride2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
