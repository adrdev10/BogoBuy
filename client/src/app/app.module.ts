import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {FilterPipe} from './filter.pipe';
import {routes, router} from './app.router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/Router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { NavigationProductComponent } from './navigation-product/navigation-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductHomeComponent,
    FilterPipe,
    NavigationProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ProductService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
