import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../models/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:Observable<any>
 
 
  id;
  pro:any={};
  constructor(private db:AngularFireDatabase,
    private route:ActivatedRoute) { }
  create(product){
     return  this.db.list('/products').push(product)
  }
  getAll(){
   return this.db.list<Product>('/products')
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
    }
  getProduct(productId){
    return this.db.object('/products/'+productId).valueChanges()
  }
  UpdateProduct(productId,product){
   return this.db.object('/products/'+productId).update(product)
  }
  DeleteProduct(productId){
    return this.db.object('/products/'+productId).remove();
  }
  Review(productId:string,review:string){
  this.db.list('/products/'+productId +'/review').push(review)
  console.log(review)
  }
  totalProducts(){
    return this.db.list('/products').valueChanges()
  }
  chartApp(){
    return this.db.list('/products').valueChanges().pipe(map(result=>{
      result
      console.log(result)
    })
    )}
}