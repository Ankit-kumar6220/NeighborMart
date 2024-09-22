import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { createOrderRequest } from 'src/app/state/Order/Actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {


  constructor(private store:Store<AppState>){}

  handleCreateOrder=()=>{

    // this.store.dispatch(createOrderRequest({}))
  }
}
