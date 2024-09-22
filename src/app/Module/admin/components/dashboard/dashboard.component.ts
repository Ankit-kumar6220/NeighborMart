import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/state/Order/order.service';
import { ProductService } from 'src/app/state/Product/product.service';
import { UserService } from 'src/app/state/User/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  recentProducts:any
  recentOrders:any
  customers:any

  constructor(private store:Store<AppState>, 
    private productService:ProductService,
    private orderService:OrderService,
    private userService:UserService
    ){
    

  }

  ngOnInit(){
    this.productService.findRecentllyAddedProduct();
    this.orderService.getAllOrders();
    this.userService.getAllCustomers();

    this.store.pipe(select(store=>store)).subscribe((store)=>{
      this.recentProducts=store.product.recent
      this.recentOrders=store.order.orders.slice(0,10)
      this.customers=store.user.customers.slice(0,10)
      console.log("store ---- ",store)
    })
  }

  displayedColumns: string[] = [
    'imageUrl',
    'title',
    'category',
    'discountedPrice',
    'quantity',
    'delete',
  ];

}
