import { OrderService } from 'src/app/Services/order.service';
import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
 @Input('cart') cart:ShoppingCart;
  shipping:any={}
  userId:string
  userSubscription:Subscription
  constructor( private orderService:OrderService,
    public router:Router,
    private AuthService:AuthService  ) { }

 
  ngOnInit() {
    this.userSubscription= this.AuthService.user$.subscribe(user => {
      if (user) { this.userId = user.uid; }
    })
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart, this.cart.totalPrice);
    let result = await this.orderService.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

OnDestroy(){
  this.userSubscription.unsubscribe()
}
}
