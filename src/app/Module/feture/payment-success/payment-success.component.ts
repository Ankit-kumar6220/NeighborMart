import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { getOrderByIdRequest } from 'src/app/state/Order/Actions';
import { OrderService } from 'src/app/state/Order/order.service';
import { PaymentService } from 'src/app/state/Payment/payment.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent {
  activeStep = 2;

  order_id: any;
  razorpay_payment_id: any;
  order: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private store: Store<AppState>,
    private paymentService:PaymentService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.order_id = params['order_id'];
      this.razorpay_payment_id = params['razorpay_payment_id'];
    });

    this.orderService.getOrderById(this.order_id);
    const reqData={orderId:this.order_id,paymentId:this.razorpay_payment_id}
    this.paymentService.updatePayment(reqData);

    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      this.order=order.order
      console.log("order ",order.order)
    })
  }

  steps = [
    { title: 'Placed', isCompleted: this.activeStep >= 1 },
    { title: 'Confirmed', isCompleted: this.activeStep >= 2 },
    { title: 'Shipped', isCompleted: this.activeStep >= 3 },
    { title: 'Delivered', isCompleted: this.activeStep >= 4 },
  ];
}
