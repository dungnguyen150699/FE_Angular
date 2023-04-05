import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ACCESS_TOKEN} from '../../utils/constant'

@Component({
  selector: 'app-oauth2-redirect',
  template: `
    <p>
      oauth2-redirect works!
    </p>
  `,
  styles: [
  ]
})
export class Oauth2RedirectComponent implements OnInit {

  constructor(private readonly routes : ActivatedRoute) { 
    // routes.
  }
  
  getUrlParameter = (name:string) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  ngOnInit(): void {
    const token = this.getUrlParameter('token');
    const error = this.getUrlParameter('error');
    if(token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      window.location.href = '';
    } else {
        window.location.href = '/login';
    }
  }

}
