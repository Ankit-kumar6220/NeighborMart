import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/state/Order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  orders:any;
  orderFilter = [
    { value: 'on_the_way', label: 'On The Way' },
    { value: 'deliverd', label: 'Deliverd' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'returned', label: 'Returned' },
  ];

  constructor(private orderService:OrderService, private store:Store<AppState>, private router:Router){}

  ngOnInit(){
    this.orderService.getOrderHistory()

    this.store.pipe(select((store:AppState)=>store.order)).subscribe(order=>{
      this.orders=order.orders
      console.log("state ------------ ",this.orders)
    })

   
  }

  navigateToOrderDetail=(path:string)=>{
    this.router.navigate([path])
  }


}
