import { Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from './Services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import{UserService} from './Services/user.service'
import { Observable } from 'rxjs';
import { MessagingService } from './Services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Egahak';
  message;
  constructor( public userService:UserService,
    private messagingService: MessagingService,
    public auth:AuthService,public router:Router,public afAuth:AngularFireAuth){
    this.afAuth.authState.subscribe(user=>{
      if(!user) return;
      
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) {
          return;
        }
  
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      })
    }
   ngOnInit(){
    this.messagingService.requestPermission()
   this.messagingService.receiveMessage()
   this.message = this.messagingService.currentMessage
    }
}