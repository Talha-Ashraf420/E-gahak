import { Injectable } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_message) => {
        _message.onMessage = _message.onMessage.bind(_message);
        _message.onTokenRefresh = _message.onTokenRefresh.bind(_message);
      }
    )
   }

   requestPermission() {
     this.angularFireMessaging.requestToken.subscribe(
       (token) => {
         console.log(token);
       }
     )
   }

   receiveMessage() {
     this.angularFireMessaging.messages.subscribe(
       (payload) => {
         console.log("Message Received - ", payload);
         this.currentMessage.next(payload);
         this.showCustomNotification(payload)
       }
     )
   }
   showCustomNotification(payload:any){
     let notify_data=payload['notification'];
     let title=notify_data['title'];
     let options={
       body:notify_data['body'],
       icon:"./assets/E-Gahak.png",
       badge:"./assets/E-Gahak.png",
       image:"./assets/E-Gahak.png"
     };
     console.log("new msg received",notify_data);
     let notify:Notification=new Notification(title,options)
     notify.onclick=event=>{
       event.preventDefault();
       window.location.href='products'
     }
   }
}
