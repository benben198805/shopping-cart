import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItem} from "../share/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() products: ProductItem[];
  @Output() productsChange = new EventEmitter();

  constructor() {
  }

  get hasItemInCart() {
    return this.displayItems.length > 0
  }

  get displayItems(): ProductItem[] {
    return this.products.filter(item => item.count > 0);
  }

  get total() {
    return this.displayItems.reduce((sum, item) => sum + item.count * item.price, 0)
  }

  reset() {
    let emptyCarts = this.products.map(item => ({...item, count: 0}));
    this.productsChange.emit(emptyCarts);
  }
}
