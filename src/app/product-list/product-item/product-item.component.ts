import {Component, Input} from '@angular/core';
import {ProductItem} from "../../share/model/product.model";
import {ShoppingCartService} from "../../share/service/shopping-cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: ProductItem;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  add() {
    this.shoppingCartService.sub.next(this.product);
  }
}
