import {Component, OnInit} from '@angular/core';
import {AddToCartItem, CartItem, ProductItem} from "../share/model/product.model";
import {ShoppingCartService} from "../share/service/shopping-cart.service";
import {mockProducts} from "../share/mock/mock-data";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts: CartItem[] = [];
  products: ProductItem[];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.products = mockProducts;
  }

  get hasItemInCart() {
    return this.carts.length > 0
  }

  get total() {
    return this.carts.reduce((sum, item) => sum + item.count * item.price, 0)
  }

  reset() {
    this.carts = [];
  }

  ngOnInit(): void {
    this.shoppingCartService.addToCartSub.subscribe((addToCartItem: AddToCartItem) => {
      let cartItem = this.carts.find(item => item.uuid === addToCartItem.uuid);
      if (cartItem) {
        if (cartItem.count + addToCartItem.count > 0) {
          cartItem.count = cartItem.count + addToCartItem.count;
        } else {
          this.carts = this.carts.filter(cart => cart.uuid != addToCartItem.uuid);
        }
      } else {
        let productItem = this.products.find(item => item.uuid === addToCartItem.uuid);
        this.carts.push({
          ...productItem, count: 1
        })
      }
    })
  }
}
