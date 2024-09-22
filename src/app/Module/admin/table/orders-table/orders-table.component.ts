import { Component,Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/state/Order/order.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent {

  
  @Input() order: any;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService
  ) {}

  ngOnInit() {
   
  }

  handleConfirmedOrder(orderId:Number){
    console.log("co",orderId)
    this.orderService.confirmedOrder(orderId)
  }
  handleShippedOrder(orderId:Number){
    this.orderService.shipOrder(orderId);
  }
  handleDeliverOrder(orderId:Number){
    this.orderService.deliverOrder(orderId)
  }
  handleDeleteOrder(orderId:Number){
    this.orderService.deleteOrder(orderId)
    console.log("dlete order ",orderId)
  }
  

  displayedColumns: string[] = [
    'imageUrl',
    'title',
    'price',
    'id',
    'status',
    'update',
    'delete',
  ];
}
