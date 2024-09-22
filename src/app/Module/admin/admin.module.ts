import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductsComponent } from './components/products/products.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { OrderTableComponent } from './components/order-table/order-table.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AdminRoutingModule } from './admin-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductTableComponent } from './table/product-table/product-table.component';
import { OrdersTableComponent } from './table/orders-table/orders-table.component';
import { CustomerTableComponent } from './table/customer-table/customer-table.component';
import { CustomersComponent } from './components/customers/customers.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductsComponent,
    OrderTableComponent,
    AddProductComponent,
    ProductTableComponent,
    OrdersTableComponent,
    CustomerTableComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    AdminRoutingModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class AdminModule { }
