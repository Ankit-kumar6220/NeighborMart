import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/state/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
@Input() product:any;
@Input() showButton:any;

constructor(private cartService:CartService){}

updateCartItem = (quantity: number) => {
  this.cartService.updateCartItem({
    cartItemId: this.product.id,
    data: { quantity: quantity + this.product.quantity },
  });
};

removeCartItem(){
  this.cartService.removeCartItem(this.product.id)
}

}
