import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavModulModuleComponent } from './nav-modul/nav-modul.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { NgZorroAntdModule } from 'src/antd.modul';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { Oauth2RedirectComponent } from './oauth2-redirect/oauth2-redirect.component';
import { CartComponent } from './cart/cart.component';
import { NavModulModule } from './nav-modul/nav-modul.module';
import { ToastrModule } from 'ngx-toastr';
import { BookComponent } from './book/book.component';
import { NodeChildComponent } from './nav-modul/node-child/node-child.component';
import { BookelementComponent } from './book/bookelement/bookelement.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient} from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Oauth2RedirectComponent,
    CartComponent,
    NavModulModuleComponent,
    BookComponent,
    NodeChildComponent,
    BookelementComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
// common Module
    NavModulModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //  antd
    NgZorroAntdModule,
    //  ngx toast
    ToastrModule.forRoot(),
      TranslateModule.forRoot({
      defaultLanguage: 'vi',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
