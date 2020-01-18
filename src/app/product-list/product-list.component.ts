import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItem} from "../share/model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: ProductItem[];

  constructor() {
  }
}
