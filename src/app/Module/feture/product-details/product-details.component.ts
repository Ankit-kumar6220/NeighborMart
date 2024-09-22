import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import {
  findProductByIdRequest,
  updateProductRequest,
} from 'src/app/state/Product/Actions';
import { productdata } from 'src/productsData';
import { Observable } from 'rxjs';
import {
  addItemToCartRequest,
  getCartRequest,
} from 'src/app/state/Cart/cart.actions';
import { ProductService } from 'src/app/state/Product/product.service';
import { CartService } from 'src/app/state/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  selectedSize!: string;
  relatedProducts: any;
  reviews = [1, 1, 1];
  productDetails$!: Observable<any>;
  productId!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productService: ProductService,
    private cartService:CartService,
  ) {
    this.relatedProducts = productdata;
  }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('productId', id);

    if (id) {
      console.log('id ', id);
      this.productService.findProductById(id)
    }

    this.productDetails$ = this.store.select(
      (state) => state.product.selectedProduct
    );

    this.productDetails$.subscribe((productdata) => {
      this.productId = Number(productdata.id);
      console.log('product details from store - ', productdata.id);
    });
  }

  handleAddToCart = () => {
    const data = { size: this.selectedSize, productId: this.productId };
    this.cartService.addItemToCart(data)
    this.cartService.getCart()

    this.store.dispatch(getCartRequest());

    this.navigateToCart();
  };
}
