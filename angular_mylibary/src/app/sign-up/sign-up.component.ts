import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { EMAIL } from 'src/utils/RegexConstant';
import { SIGNUP } from 'src/utils/types';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpStatus: boolean = false;
  retypePasswordStatus: boolean = true;
  password?: string;
  user:SIGNUP = {
    email: '',
    name: '',
    password: ''
  };
  
  signUpForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(EMAIL)]),
    username: new FormControl('',[Validators.required]),
    password : new FormControl('',Validators.required),
    retypePassword : new FormControl('',[Validators.required])
  })

  constructor(private signUpService:SignUpService, private route:Router) { }

  ngOnInit(): void { }

  checkKeyNameFirstKeyObject = (object:ValidationErrors | null | undefined, key:string) : boolean =>{
    if(object == null) return false;
    let keyFirstObject:string = Object.keys(object)[0];
    return key===keyFirstObject;
  }

  validateSignUp = () : boolean => {
    let password = this.signUpForm.get('password')?.value;
    let retypePassword = this.signUpForm.get('retypePassword')?.value;
    if(password !== retypePassword)  this.retypePasswordStatus = false;
    else this.retypePasswordStatus = true;
    return this.retypePasswordStatus;
  }
  
  onSubmit = () =>{
    if(this.validateSignUp()){
      this.user = {
        email: this.signUpForm.get('email')?.value,
        name: this.signUpForm.get('username')?.value,
        password: this.signUpForm.get('password')?.value
      };
      
      const subscription:Subscription = this.signUpService.signUp(this.user).subscribe({
        next : (res:any) =>{
          this.signUpStatus = true;
        },
        complete : () =>{
          subscription.unsubscribe();
        }
      });
    }
  }

}
