import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {Router, ActivatedRoute} from '@angular/router'
import { Observable, of } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/app-users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // User data var
user$: Observable<firebase.User>
  constructor(private userService:UserService, public afAuth:AngularFireAuth,
    public router:ActivatedRoute,private route: Router,) {    
      /* Saving user data as an object in localstorage if logged out than set to null */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user; // Setting up user data in userData var
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));}
      })
      this.user$ = afAuth.authState;
    } 
    
    login(email:string,password:string){
      let returnUrl=this.router.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl)
      this.afAuth.auth.signInWithEmailAndPassword(email,password).then(
        value=>{
          //this.route.navigate(['../home'])
          console.log('Success',value);
        }
      ).catch(
       err=> {
        console.log('Failed',err,Message);
        }
      )
    }
    signup(email:string,password:string){
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(
        value=>{
          console.log('Success',value);
          //this.route.navigate(['../home'])
        }
      ).catch(
       err=> {
        console.log('Success',err,Message);
        }
      )
    }
    loggedin(){

      return !!localStorage.getItem('user');
      
    }
    logout(){
      return this.afAuth.auth.signOut().then(() => {
        this.route.navigate(['home']);
      })
    }
    
    get appUser$(): Observable<AppUser> {
      return this.user$.pipe(
        switchMap((user) => {
          if (user) {
            return this.userService.get(user.uid);
          } else {
            return of(null);
          }
        })
      );
    }
}
