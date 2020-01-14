import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CountOperatorComponent } from './share/component/count-operator/count-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    CountOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
