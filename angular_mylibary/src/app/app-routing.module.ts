import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Oauth2RedirectComponent } from './oauth2-redirect/oauth2-redirect.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "oauth2",
    component: Oauth2RedirectComponent
  },
  {
    path: "",
    loadChildren: () => 
      import('./nav-modul/nav-modul-routing.module')
        .then( (m) => m.NavModulRoutingModule)
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{
  ngOnInit(): void {
  } 

}
