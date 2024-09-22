import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { createOrderRequest } from 'src/app/state/Order/Actions';
import { OrderService } from 'src/app/state/Order/order.service';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss'],
})
export class AdressFormComponent {
  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  adresses: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private orderService:OrderService
  ) {
    this.store.pipe(select((state) => state)).subscribe((store) => {
      console.log('address ', store);
      this.adresses = store.user.userProfile.addresses;
    });
  }

  // ngOnInit() {

  // }

  handleCreateOrder=(reqData:any)=>{
    this.orderService.createOrder(reqData)
    // this.router.navigate(['/checkout/payment']);
    console.log('handle submit - : ', reqData);
  }

  handleSubmit = () => {
    const formValue = this.myForm.value;
    const reqData = formValue;
    this.handleCreateOrder(reqData)
    // this.store.dispatch(createOrderRequest({ reqData }));
    
  };
}
