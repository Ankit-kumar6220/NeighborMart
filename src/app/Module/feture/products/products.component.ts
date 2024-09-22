import { Component } from '@angular/core';
import { productdata } from 'src/productsData';
import { filters, singleFilter } from './FilterData';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/state/Auth/auth.reducer';
import { findProductsByCategoryRequest } from 'src/app/state/Product/Actions';
import { AppState } from 'src/app/Models/AppState';
import { Observable, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from 'src/app/state/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent {
  private routerEventsSubscription: Subscription | undefined;
  private routeQueryParamsSubscription: Subscription | undefined;

  products: any[] = [];
  filterItems: any[] | undefined;
  singleFilterItems: any[] | undefined;
  lavelOne!: string | null;
  lavelTwo!: string | null;
  lavelThree!: string | null;
  fetchedProducts:any;
  totalPages = 0;

  ngOnInit() {
    

    this.routerEventsSubscription = this.activatedRoute.paramMap.subscribe(

      (params) => {
        var reqData = {
          category: params.get('lavelThree'),
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          sort: 'price_low',
          pageNumber: 0,
          pageSize: 10,
          stock: null,
        };

       
        this.productService.findProductsByCategory(reqData)
        
        console.log('reqData - change', this.lavelThree, reqData);
        this.lavelOne = params.get('lavelOne');
        this.lavelTwo = params.get('lavelTwo');
        this.lavelThree = params.get('lavelThree');
      }
    );

    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        const color = params['color']; // Retrieves the value of the 'color' parameter
        const size = params['size']; // Retrieves the value of the 'size' parameter
        const price = params['price']; // Retrieves the value of the 'price' parameter
        const discount = params['disccout']; // Retrieves the value of the 'discount' parameter
        const stock = params['stock']; // Retrieves the value of the 'stock' parameter
        const sort=params["sort"]
        const minPrice = price?.split('-')[0];
        const maxPrice = price?.split('-')[1];
        const pageNumber=params["pageNumber"]

        const updatedReqData = {
          category: this.lavelThree,
          colors: params['color'] ? [params['color']].join(',') : [], // Extract and set color parameter
          sizes: [],
          minPrice: params['price'] ? minPrice : 0,
          maxPrice: params['price'] ? maxPrice : 100000,
          minDiscount: discount?discount:0,
          sort: sort?sort:'price_low',
          pageNumber: pageNumber? pageNumber-1:0,
          pageSize: 10,
          stock: null,
        };

        this.productService.findProductsByCategory(updatedReqData)
        
        console.log(this.store.select((state: AppState) => state.product));
        console.log('activate route ', this.route.url, updatedReqData);
      }
    );


    this.store.pipe(select((store:AppState)=>store.product)).subscribe((product)=>{
      this.fetchedProducts=product.products.content

      this.totalPages=product.products.totalElements

      // console.log("products store ",product)
    }
    )

  }

  

  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }

    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store<AppState>,
    private productService:ProductService
  ) {
    this.products = productdata;
    this.filterItems = filters;
    this.singleFilterItems = singleFilter;
  }

  handleMultipleSelectFilter(value: string, sectionId: string): void {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];

    const valueIndex = filterValues.indexOf(value);

    console.log(queryParams, filterValues);

    if (valueIndex !== -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string): void {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
  }

  handlePageChange(event: PageEvent): void {
    const newPageIndex = event.pageIndex + 1; // Page index is zero-based
this.handleSingleSelectFilter(newPageIndex.toString(),"pageNumber")
    // Fetch products with the new page index
    // this.fetchProducts(newPageIndex);
  }

  nativateToProductDetailPage(id: string) {
    this.router.navigate([`/product-details/${id}`]);
  }
}
