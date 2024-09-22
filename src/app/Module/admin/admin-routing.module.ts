import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerTableComponent } from './table/customer-table/customer-table.component';
import { CustomersComponent } from './components/customers/customers.component';

const adminRoutes:Routes=[
  {path: '',component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"orders",component:OrderTableComponent},
    {path:"products",component:ProductsComponent},
    {path:"customers",component:CustomersComponent},
    {path:"add-products",component:AddProductComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
