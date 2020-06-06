import { ProductService } from './../../../Services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product} from '../../../models/Product'
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  rows: Product[] = [];
  subscription:Subscription;
  filteredProducts:Product[];
  constructor(private productService:ProductService) { 
  // this.subscription=this.productService.getAll().subscribe((products: Product[]) => (this.filteredProducts = this.products = products));
   //  console.log(this.products)
  this.subscription = this.productService.getAll()
  .subscribe(products => {
    
    this.products = products;
    console.log(products)
    this.rows = this.products;
  });
  }
filter(query:string){
// this.filteredProducts= (query)?
// this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase()))
// :this.products;
let filteredProducts = this.products.filter(product => {
  return product.title.toLowerCase().includes(query.toLowerCase());
});
this.rows = filteredProducts;

}
ngOnDestroy(){
this.subscription.unsubscribe()
}
  ngOnInit(): void {
  }

}
