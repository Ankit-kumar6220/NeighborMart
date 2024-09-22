import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FetureModule } from './feture/feture.module';
// import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/Auth/auth.reducer';
// import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './state/User/Reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './state/Product/product.reducer';
import { cartReducer } from './state/Cart/cart.reducer';
import { orderReducer } from './state/Order/order.reducer';
import { AdminModule } from './Module/admin/admin.module';
import { AuthModule } from './Module/auth/auth.module';
import { FetureModule } from './Module/feture/feture.module';
import { SharedModule } from './Module/shared/shared.module';
import { reviewReducer } from './state/Review/review.reducer';
// import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetureModule,
    SharedModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product: productReducer,
      cart: cartReducer,
      order: orderReducer,
      review:reviewReducer
    }),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
