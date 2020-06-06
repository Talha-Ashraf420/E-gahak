import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { ShoppingCart } from './../../../models/ShoppingCart';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
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
