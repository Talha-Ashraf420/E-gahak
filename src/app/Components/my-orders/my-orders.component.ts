import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { OrderService } from 'src/app/Services/order.service';
import { Order } from 'src/app/models/Order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent  {

  orders$:Observable<any>
  id;
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    private orderService: OrderService
  ) 
  
 {
 this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
  }
  
}
