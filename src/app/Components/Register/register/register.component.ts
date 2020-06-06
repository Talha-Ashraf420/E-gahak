import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm:FormGroup;
  email:string
  password:string
  cpassword:string
  nationality:string
  username:string
  phone:string
  constructor(private fb: FormBuilder,public auth:AuthService) {
    this.CreateForm();
   }
   CreateForm(){
     this.angForm=this.fb.group({
       Email:['',Validators.required],
       Password:['',Validators.required],
       Nationality:['',Validators.required],
       Username:['',Validators.required],
       Phone:['',Validators.required],
       CPassword:['',Validators.required]
     })
   }
   signup()
{
  this.auth.signup(this.email,this.password)
  this.email=this.password=this.nationality=this.cpassword=this.username=this.phone=''
}
  ngOnInit() {
  }

}
