import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ShoppingCartService} from "../../share/service/shopping-cart.service";

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.css']
})
export class CountOperatorComponent implements OnInit {
  @Input() count: number;
  @Input() uuid: string;
  @Input() unit: string;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  addCount() {
    this.count++;
    this.shoppingCartService.addToCartSub.next({uuid: this.uuid, count: 1})
  }

  minusCount() {
    this.count--;
    this.shoppingCartService.addToCartSub.next({uuid: this.uuid, count: -1})
  }

}
