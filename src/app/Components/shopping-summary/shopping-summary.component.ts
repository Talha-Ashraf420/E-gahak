import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './shopping-summary.component.html',
  styleUrls: ['./shopping-summary.component.css']
})
export class ShoppingSummaryComponent  {
  //cart$:Observable<ShoppingCart>
  @Input('cart') cart: ShoppingCart;
}
