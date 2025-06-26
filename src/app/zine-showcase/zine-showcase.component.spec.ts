import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZineShowcaseComponent } from './zine-showcase.component';

describe('ZineShowcaseComponent', () => {
  let component: ZineShowcaseComponent;
  let fixture: ComponentFixture<ZineShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZineShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZineShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
