import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation-product',
  templateUrl: './navigation-product.component.html',
  styleUrls: ['./navigation-product.component.css']
})
export class NavigationProductComponent implements OnInit {

  constructor() { }

  isCollapsed: boolean = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
