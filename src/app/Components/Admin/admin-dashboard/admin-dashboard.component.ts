import { UserService } from './../../../Services/user.service';
import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  total:any
  totalProducts:any
  totalUsers:any
  constructor(private orderService:OrderService,private productService:ProductService,
    private userService:UserService) { }

  ngOnInit() {


    this.userService.totalUsers().subscribe(result=>{
      this.totalUsers =result.length
      console.log(result.length)
      return result
  })

    this.productService.totalProducts().subscribe(result=>{
      this.totalProducts =result.length
      console.log(result.length)
      return result
  })

    this.orderService.totalOrders().subscribe(result=>{
      this.total =result.length
      console.log(result.length)
      return result
  })
}
}
