import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItem} from "../share/model/product.model";
import {mockProducts} from "../share/mock/mock-data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: ProductItem[];

  constructor() {
    this.products = mockProducts;
  }
}
