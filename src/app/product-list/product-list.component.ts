import {Component, OnInit} from '@angular/core';
import {ProductItem} from "../share/product.model";
import {mockProducts} from "../share/mock-data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [] as ProductItem[];

  constructor() {
  }

  ngOnInit() {
    this.products = mockProducts;
  }
}
