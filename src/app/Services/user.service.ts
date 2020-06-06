import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-users';
import * as firebase from 'firebase'
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }
  save(user:firebase.User){
    this.db.object('/users/'+user.uid).update({
      email:user.email
    })
  }
  get(uid: string):Observable<any> {
    return this.db.object('/users/' + uid).valueChanges()
 }
 totalUsers(){
  return this.db.list('/users').valueChanges()
}
}
