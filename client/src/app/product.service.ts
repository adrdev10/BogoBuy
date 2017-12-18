import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Product} from './product';
import 'rxjs/add/operator/map';
// Services are a great way to share information.
//Innjectable object. It Will be implement in the productComponent class
@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  //Get products 
  getProducts(){
    return this.http.get('http://localhost:3000/api/products')
    .map(res => res.json());
  }

  //Get a single product
  getProduct(id:number){
    return this.http.get('http://localhost:3000/api/product/:id')
    .map(res => res.json());
  }
}
