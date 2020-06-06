import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { CategoryService } from './../../../Services/category.service';
import { ProductService } from './../../../Services/product.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  subscription:Subscription
products:Product[]=[];
 category:string;
categories$;
  filteredProducts: Product[]=[];
  cart: any;
 
  //  productService.getAll().subscribe(products=>{
  //    this.products=products
  
  //    route.paramMap.subscribe(params=>{
  //     this.category=params.get('category')
  
  //     this.filteredProducts=(this.category) ?
  //     this.products.filter(p=>p.category===this.category):
  //     this.products;
  //     console.log('hiiiiiiii',this.filteredProducts)
  //     console.log(this.products)
  //     })
  

  // })
  //   this.categories$=CategoryService.getCategories()

  constructor(private route:ActivatedRoute,
    public shoppingCart:ShoppingCartService,
   private productService:ProductService,CategoryService:CategoryService) {
    this.categories$=CategoryService.getCategories()

   } 

   
  async ngOnInit() {
     (await this.shoppingCart.getCart()).subscribe(cart=>{
       this.cart=cart
     })
    this.populateProducts();
  }

  private populateProducts() { 
    this.productService
      .getAll()
      .pipe(
        switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
        // this is the second observable that we switched to, so when we subscribe to this we get the route parameters
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();      
      })
      ;
  }


  private applyFilter() { 
    this.filteredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
    console.log(this.filteredProducts)

  }
  ngOnDestroy(){
   
  }
}     
