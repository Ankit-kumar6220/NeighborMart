import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getUserProfile } from 'src/app/state/User/Actions';
// import { getUserProfile } from '../state/User/Actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isLoggedIn=true;

  constructor(  private dialog: MatDialog,private store: Store){}

  openModal(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      disableClose: true
    });
  }

  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

  

  ngOnInit(): void {
    this.store.dispatch(getUserProfile()); // Dispatch the action when the component initializes
  }

}
