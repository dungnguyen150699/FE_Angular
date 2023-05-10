import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AUTH, LoginResponse } from 'src/utils/types';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';  
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ACCESS_TOKEN } from 'src/utils/constant';
import { Subscription } from 'rxjs';

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

    const subcription:Subscription = this.loginService.auth(this.user).subscribe(
      {
        next : (res: any) =>{
          this.loginForm.reset;
          localStorage.setItem(ACCESS_TOKEN,res.item.accessToken);
          this.setLocalStorageUserInfo();
          const stringify:string|null = localStorage.getItem("user");
          let response:LoginResponse|null = null;
          if(stringify!=null){
            response = JSON.parse(stringify);
          }

          if(response?.authorities?.find(item => "ADMIN"==item.authority)){
            this.route.navigate(['admin']);
          }else{
            this.route.navigate(['']);
          }
        },
        complete : ()=>{
          subcription.unsubscribe();
        }
      });
  }

  setLocalStorageUserInfo = () =>{
    this.loginService.infor().subscribe({
      next : (res:any) =>{
        localStorage.removeItem("user");
        localStorage.setItem("user",JSON.stringify(res.item));
      }
    }).unsubscribe;
    
  }
}
