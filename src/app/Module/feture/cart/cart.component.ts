import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/state/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products = [1, 1, 1, 1, , 1];
  cart: any;
  cartItems:any;

  constructor(
    private router: Router,
    private cartService: CartService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.cartService.getCart();
  

    this.store.pipe(select((store) => store.cart)).subscribe((cart) => {
      this.cart = cart;
    });
  }

  navigateToCheckout = () => {
    this.router.navigate(['checkout']);
  };

  removeCartItem = (cartItemId: Number) => {
    this.cartService.removeCartItem(cartItemId);
  };

  
}
