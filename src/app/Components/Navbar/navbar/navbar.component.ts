import { AppUser } from './../../../models/app-users';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { Router } from '@angular/router';
import { CategoryService } from './../../../Services/category.service';
import { ProductService } from './../../../Services/product.service';
import { AuthService } from './../../../Services/auth.service';
import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart$:Observable<ShoppingCart>
  appUser:AppUser;
  user$:Observable<firebase.User>
  categories$;
  category: any;
  constructor(public router:Router, public auth:AuthService, private ShoppingCartService:ShoppingCartService,
     public afauth:AngularFireAuth, productService:ProductService,CategoryService:CategoryService) {
    this.auth.appUser$.subscribe(user => this.appUser = user);
    this.categories$=CategoryService.getCategories()
    console.log(this.categories$)
   }
   
   
  logout(){
    this.auth.logout();
  }
async  ngOnInit() {
  this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  this.cart$=  await this.ShoppingCartService.getCart()
  }
  }

