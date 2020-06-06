import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-order-details',
  templateUrl: './my-order-details.component.html',
  styleUrls: ['./my-order-details.component.css']
})
export class MyOrderDetailsComponent implements OnInit {

  id;
  product$:Observable<any>
  
  constructor(
    route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) orderService.getSingleOrder(this.id).take(1).subscribe();
  }

  async ngOnInit(){
    this.product$ = await this.orderService.getSingleOrder(this.id).take(1);
  }
}