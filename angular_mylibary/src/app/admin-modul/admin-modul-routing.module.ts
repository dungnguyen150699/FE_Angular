import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ManagementProductComponent } from './management-product/management-product.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementUserComponent,
    children: [ // Dùng load Childen để xử dụng lazy loading rounting ( đại khái là khi load appModul nó ko load Modul Con kia luôn)
      {
        path: 'product',
        component: ManagementProductComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModulRoutingModule { }
