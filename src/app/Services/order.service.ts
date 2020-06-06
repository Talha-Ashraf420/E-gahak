import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private db:AngularFireDatabase,private shoppingCartService:ShoppingCartService) { }

getOrders() {
  return this.db.list('/orders').snapshotChanges()
  .pipe(map(items => {            // <== new way of chaining
    return items.map(a => {
      const data = a.payload.val();
      const key = a.payload.key;
      console.log(data)
      return {key, data};           // or {key, ...data} in case data is Obj
    });
  }));}
  
 removeOrder(id){
  return this.db.object('/orders/' + id).remove();
 }
  getSingleOrder(id) {
    return this.db.object('/orders/' + id).valueChanges();
  }
  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }
  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref =>
    ref.orderByChild('userId').equalTo(userId)).snapshotChanges()
    .pipe(map(items => {            // <== new way of chaining
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        console.log(key)
        console.log(data)
        return {key, data};           // or {key, ...data} in case data is Obj
      });
    }));
  }
  totalOrders(){
    return this.db.list('/orders').valueChanges()
  }
}
