import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthService } from './../../../Services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  user$:Observable<firebase.User>

  constructor(public auth:AuthService, public afauth:AngularFireAuth) {
    this.user$ = this.afauth.authState;
    //afauth.authState.subscribe(user=>console.log(user))
   }



  ngOnInit() {
  }

}
