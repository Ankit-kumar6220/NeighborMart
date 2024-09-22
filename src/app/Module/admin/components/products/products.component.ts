import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { ProductService } from 'src/app/state/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  private routeQueryParamsSubscription: Subscription | undefined;

  filterValue = {
    category: '',
    availability: '',
    sort: '',
  };

  customersProduct = {
    products: {
      totalPages: 0,
      content: [], // Add your product data here
    },
  };

  products: any;
  content:any;

  currentPage = 1;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.store.pipe(select((store) => store.product)).subscribe((products) => {
      this.products = products;
      this.content=products?.content
      console.log('all products ', products.content);
    });

    const data = {
      category: '',
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0 || 0,
      pageSize: 10,
      stock: 'in_stock',
    };

    this.productService.findProductsByCategory(data);

    this.routeQueryParamsSubscription=this.activatedRoute.queryParams.subscribe((params)=>{
      const data = {
        category: '',
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 100000,
        minDiscount: 0,
        sort: 'price_low',
        pageNumber: params["pageNumber"] || 0,
        pageSize: 10,
        stock: 'in_stock',
      };
      this.productService.findProductsByCategory(data);
    })
  }

 

  handleDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
  }

  handlePaginationChange(event: any) {
    const newPageIndex = event.pageIndex; // Page index is zero-based
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    queryParams["pageNumber"] = newPageIndex;

    this.router.navigate([], { queryParams });
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
