import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/Product';
import { take, map } from 'rxjs/operators';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../models/shopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  constructor(private db:AngularFireDatabase) { }
 private create(){
   return  this.db.list('shopping-cart').push({
      dateCreated:new Date().getTime()
    })
  }
async getCart():Promise<Observable<ShoppingCart>>{
  let cartId=await this.getOrCreateCartId()
  return this.db.object('/shopping-cart/' + cartId).snapshotChanges()
  .pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));
  }
 private async getOrCreateCartId():Promise<string>{
    let cartId=localStorage.getItem('cartId')

    if(cartId) return cartId
    
      let result= await this.create();
      localStorage.setItem('cartId',result.key)
      return result.key
 
  }

  private getItem(cartId:string,productId:string){
   return this.db.object('/shopping-cart/'+cartId + '/items/'+productId)
  }

 async addToCart(product:Product ){
  this.updateItemQuantity(product,+1)
  }
  async removeFromCart(product:Product ){
    this.updateItemQuantity(product,-1)
    } 
async updateItemQuantity(product:Product, change:number){
  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, product.key);
  item$.snapshotChanges().pipe(take(1)).subscribe(item => {
    let quantity = change;
    if (item.payload.exists()) {
      item$.update({
        quantity: item.payload.exportVal().quantity +change
      });
      console.log(quantity)
      //if (quantity === 0) { item$.remove(); }
    }
  
    else {
      item$.update({
        title: product.title,
        imageUrl: product.ImageUrl,
        price: product.price,
        quantity: quantity
     });
    }
  });
}
async clearCart(){
  let cartId= await this.getOrCreateCartId()
  this.db.object('/shopping-cart/'+cartId+ '/items').remove()
}
}
