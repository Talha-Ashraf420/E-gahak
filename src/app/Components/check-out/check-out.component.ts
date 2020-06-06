import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/ShoppingCart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cart$:  Observable<ShoppingCart>
  
  constructor( 
    private ShoppingCartService:ShoppingCartService) { }
 
 async  ngOnInit() {
       this.cart$ =  await this.ShoppingCartService.getCart()
  }

}
