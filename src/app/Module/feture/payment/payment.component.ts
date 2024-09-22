import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { getOrderByIdRequest } from 'src/app/state/Order/Actions';
import { Observable } from 'rxjs';
import { createPaymentRequest } from 'src/app/state/Payment/Actions';
import { OrderService } from 'src/app/state/Order/order.service';
import { PaymentService } from 'src/app/state/Payment/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  order$!: Observable<any>;

  products = [1, 1, 1];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private orderService:OrderService,
    private paymentService:PaymentService,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id)
      this.store.dispatch(getOrderByIdRequest({ orderId: id }));
    }
    this.order$ = this.store.select((store) => store.order.order);
    this.order$.subscribe((order) => console.log('order from store - ', order));
  }

  redirectToPaymentPage = () => {
    this.order$.subscribe((order) => {
      console.log('redirect --- ');
      // this.store.dispatch(createPaymentRequest({ orderId: order.id }));
      this.paymentService.createPayment(order.id)
    });
  };
}
