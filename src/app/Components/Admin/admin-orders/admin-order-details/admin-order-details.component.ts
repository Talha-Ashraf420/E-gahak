import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  id;
  product$:Observable<any> 
  constructor(
   private router:Router,
    route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) orderService.getSingleOrder(this.id).take(1).subscribe();
  }

  remove(){
    if (!confirm('Are you sure? You want to delete it?')) return
    this.orderService.removeOrder(this.id);
    this.router.navigate(['admin-orders']);
  
}
  async ngOnInit(){
    this.product$ = await this.orderService.getSingleOrder(this.id).take(1);
  }
}
