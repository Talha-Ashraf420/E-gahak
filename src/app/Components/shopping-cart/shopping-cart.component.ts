import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:Observable<ShoppingCart>

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    console.log(this.cart$)
  }
  clearCart(){
    this.cartService.clearCart()
  }
}
