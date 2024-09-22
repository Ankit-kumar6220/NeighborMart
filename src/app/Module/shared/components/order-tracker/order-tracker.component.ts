import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-order-tracker',
  templateUrl: './order-tracker.component.html',
  styleUrls: ['./order-tracker.component.scss']
})
export class OrderTrackerComponent {
  // @Input() activeStep: number | undefined;

  @Input() activeStep: any
  @Input() steps:any
  

  // steps = [
  //   { title: 'Order Placed', isCompleted: this.activeStep >= 1 },
  //   { title: 'Processing', isCompleted: this.activeStep >= 2 },
  //   { title: 'Shipped', isCompleted: this.activeStep >= 3 },
  //   { title: 'Delivered', isCompleted: this.activeStep >= 4 },
  // ];
}
