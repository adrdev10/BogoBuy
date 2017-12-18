import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  @Input() product:Product;

  ngOnInit() {
    
  }
  
}
