import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {
  @Input('product') product:Product
  @Input('show-actions') showActions=true;
  @Input("shopping-cart") shoppingCart: ShoppingCart;
    constructor(private cartService:ShoppingCartService) { }
  
    ngOnInit(): void {
    }
    addToCart(){
      this.cartService.addToCart(this.product)
    }
    removeFromCart(){
      this.cartService.removeFromCart(this.product)
    }
}
