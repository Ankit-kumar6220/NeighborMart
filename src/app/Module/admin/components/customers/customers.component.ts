import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { UserService } from 'src/app/state/User/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  customers:any

  constructor(private store:Store<AppState>, 
    
    private userService:UserService
    ){
    

  }

  ngOnInit(){

    this.userService.getAllCustomers();

    this.store.pipe(select(store=>store.user)).subscribe((user)=>{
      
      this.customers=user.customers
      console.log("store ---- ",user)
    })
  }


}
