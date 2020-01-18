import {Component} from '@angular/core';
import {CartItem} from "./share/model/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carts = [] as CartItem[];
}
