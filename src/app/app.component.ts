import {Component, OnInit} from '@angular/core';
import {ProductItem} from "./share/product.model";
import {mockProducts} from "./share/mock-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = [] as ProductItem[];

  ngOnInit(): void {
    this.products = mockProducts;
  }


}
