import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSliderComponent } from './product-card-slider.component';

describe('ProductCardSliderComponent', () => {
  let component: ProductCardSliderComponent;
  let fixture: ComponentFixture<ProductCardSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardSliderComponent]
    });
    fixture = TestBed.createComponent(ProductCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
