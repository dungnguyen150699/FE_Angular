import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { NavModulModuleComponent } from './nav-modul.component';
import { HomeComponent } from '../home/home.component';
import { BookComponent } from '../book/book.component';


const routes: Routes = [
  {
    path: '',
    component: NavModulModuleComponent,
    children: [ // Dùng load Childen để xử dụng lazy loading rounting ( đại khái là khi load appModul nó ko load Modul Con kia luôn)
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'book',
        component: BookComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavModulRoutingModule { }
