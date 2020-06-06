import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm:FormGroup;
  email:string
  password:string

  constructor(private fb: FormBuilder,public auth:AuthService) {
    this.CreateForm();
   }
   CreateForm(){
     this.angForm=this.fb.group({
       Email:['',Validators.required],
       Password:['',Validators.required]
     })
   }
  login() {
    this.auth.login(this.email, this.password);
    this.angForm.reset();   
  }

  ngOnInit() {
  }

}
