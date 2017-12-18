import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {FilterPipe} from '../filter.pipe';
@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService,FilterPipe],
})
export class ProductComponent implements OnInit{

  products: Product[];
  product: Product;
  name: string;

  constructor(private productService: ProductService) { }

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
}


  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products =>
      this.products = products);
    }

}