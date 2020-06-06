import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any={};
  id;
   products$;
   view=[]

   subscription:Subscription;
     constructor(private cartService:ShoppingCartService,
      private router:Router,
       private route:ActivatedRoute,
       private productService:ProductService,
       private authService:AuthService) { 
     }
   
     ngOnInit(): void {
              this.id= this.route.snapshot.paramMap.get('id')
       if(this.id) this.productService.getProduct(this.id).subscribe((res:any)=>{
         this.product=res;
        
        Object.values(this.product.review).forEach(res=>{
          this.view.push(res)
        })
        this.product.review =this.view
        console.log("Array of Reviews",this.view)
       })
     }

 
    Review(review){
     this.productService.Review(this.id,review)
     location.reload()
     //console.log(review)
    }
}
