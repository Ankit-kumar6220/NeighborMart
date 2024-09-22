import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductCardComponent } from './slider-product-card.component';

describe('SliderProductCardComponent', () => {
  let component: SliderProductCardComponent;
  let fixture: ComponentFixture<SliderProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderProductCardComponent]
    });
    fixture = TestBed.createComponent(SliderProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
