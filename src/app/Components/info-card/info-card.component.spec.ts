import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    component.group = {
      name: "",
      subtitle: "",
      icon: "",
      imagePath: "",
      description: "",
      links: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
