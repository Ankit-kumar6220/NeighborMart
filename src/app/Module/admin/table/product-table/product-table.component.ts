import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { ProductService } from 'src/app/state/Product/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {

  @Input() dataSource:any
  // @Input() displayedColumns:any
  @Input() isPagination:any
  @Input() isDashboard:any

  private routeQueryParamsSubscription: Subscription | undefined;



  products: any;
  // content:any;

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
      // this.content=products?.content
      console.log('all products ', products.content);
    });

    
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
