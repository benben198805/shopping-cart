import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItem} from "../../share/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: ProductItem;
  @Output() productChange = new EventEmitter();

  constructor() {
  }

  addToCart() {
    this.product.count++;
    this.productChange.emit(this.product)
  }
}
