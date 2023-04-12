import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SIGNUP } from 'src/utils/types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpStatus: boolean = false;
  passwordVisible: boolean = false;
  password?: string;
  user:SIGNUP = {
    email: '',
    name: '',
    password: ''
  };

  // FormBuilder.

  signUpForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password : new FormControl(''),
    retypePassword : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    let password = this.signUpForm.get('password')?.value;
    let retypePassword = this.signUpForm.get('retypePassword')?.value;
    if(password !== retypePassword) 

    this.user = {
      email: this.signUpForm.get('email')?.value,
      name: this.signUpForm.get('username')?.value,
      password: this.signUpForm.get('password')?.value
    }
  }

  validateSignUp = () =>{

  }

  onSubmit = () =>{

  }

}
