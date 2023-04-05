import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AUTH } from 'src/utils/types';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';  
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ACCESS_TOKEN } from 'src/utils/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  })

  user:AUTH = {
    email : '',
    password : ''
  };
  
  constructor(private loginService:LoginService, private route:Router, private toastr:ToastrService){

  }
  
  ngOnInit(): void {
    // this.setValueLoginForm();
  }

  setValueLoginForm = () =>{
    this.loginForm.get('email')?.setValue('Type Your Email');
    this.loginForm.get('password')?.setValue('Type Your Password');
  }

  onSubmit = ():void => {
    this.user = {
      email: this.loginForm.get('email')?.value  ,
      password: this.loginForm.get('password')?.value 
    }

    this.loginService.auth(this.user).subscribe(
      {
        next : (res: any) =>{
          this.loginForm.reset;
          localStorage.setItem(ACCESS_TOKEN,res.item.accessToken);
          this.setLocalStorageUserInfo();
          this.route.navigate(['']);
        },
        error : (err:any) =>{
          console.log("error", err);
          this.toastr.error("Fail",err.error.message,{
          timeOut:5000 });
        }
      }).unsubscribe;
  }

  setLocalStorageUserInfo = () =>{
    this.loginService.infor().subscribe({
      next : (res:any) =>{
        localStorage.setItem("user",JSON.stringify(res.item));
      }
    }).unsubscribe;
    
  }
}
