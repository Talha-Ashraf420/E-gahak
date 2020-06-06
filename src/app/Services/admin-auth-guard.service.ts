import { AppUser } from './../models/app-users';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {
 

  constructor( private router:Router, private auth:AuthService,private userService:UserService) { }
  user$: Observable<AppUser>;
 
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}