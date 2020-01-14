import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItem} from "../../share/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: ProductItem;
  @Output() addToCart = new EventEmitter();

  constructor() {
  }

  add() {
    this.addToCart.emit()
  }
}
