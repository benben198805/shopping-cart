import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../share/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() carts: CartItem[];
  @Output() cartsChange = new EventEmitter();

  constructor() {
  }

  get hasItemInCart() {
    return this.carts.length > 0
  }

  get total() {
    return this.carts.reduce((sum, item) => sum + item.count * item.price, 0)
  }

  reset() {
    this.cartsChange.emit([]);
  }
}
