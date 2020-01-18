import {Component, OnInit} from '@angular/core';
import {CartItem, ProductItem} from "./share/model/product.model";
import {mockProducts} from "./share/mock/mock-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = [] as ProductItem[];
  carts = [] as CartItem[];

  ngOnInit(): void {
    this.products = mockProducts;
  }

  addToCart(uuid: string) {
    let cartItem = this.carts.find(item => item.uuid === uuid);
    if (cartItem) {
      cartItem.count++;
    } else {
      let productItem = this.products.find(item => item.uuid === uuid);
      this.carts.push({
        ...productItem, count: 1
      })
    }
  }

}
