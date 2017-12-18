import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ProductHomeComponent} from './product-home/product-home.component';
import {ProductService} from './product.service';
import {ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const router: Routes = [
    {path: '', redirectTo:'product-home', pathMatch:'full'},
    {path: 'product-home', component:ProductHomeComponent},
    {path: 'products', component: ProductComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);