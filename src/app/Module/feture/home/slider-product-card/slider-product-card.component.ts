import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-product-card',
  templateUrl: './slider-product-card.component.html',
  styleUrls: ['./slider-product-card.component.scss']
})
export class SliderProductCardComponent {

  @Input() product:any | undefined;

  
}
