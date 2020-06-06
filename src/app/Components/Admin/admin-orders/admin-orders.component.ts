import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { AuthService } from 'src/app/Services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$
  order:any
  id
  total$;
  total:any
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private authService: AuthService,
    private orderService: OrderService
  ) {  
    if(this.id) this.orderService.getSingleOrder(this.id).subscribe((res:any)=>{
      this.order=res;
      console.log(res)
})
    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrders())
    )
  }
  ngOnInit() {
     this.orderService.totalOrders().subscribe(result=>{
     this.total =result.length
     console.log(result.length)
     return result
   })
  }
}
