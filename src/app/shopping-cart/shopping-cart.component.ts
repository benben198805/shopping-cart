import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem, ProductItem} from "../share/model/product.model";
import {ShoppingCartService} from "../share/service/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() carts: CartItem[];
  @Output() cartsChange = new EventEmitter();

  constructor(private shoppingCartService: ShoppingCartService) {
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

  removeItem(uuid: string) {
    this.carts = this.carts.filter(item => item.uuid !== uuid);
    this.cartsChange.emit(this.carts);
  }

  ngOnInit(): void {
    this.shoppingCartService.sub.subscribe((product: ProductItem) => {
      let cartItem = this.carts.find(item => item.uuid === product.uuid);
      if (cartItem) {
        cartItem.count++;
      } else {
        this.carts.push({
          ...product, count: 1
        })
      }
    })
  }
}
