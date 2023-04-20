import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root', // this way dont need setup provider in modul need inject
})
export class LoginService {

    constructor(private http: HttpClient) { }

    auth = (user:any) : Observable<Object> =>{
        return this.http.post(API_URL.LOGIN,user,HEADER_COMON)
    }

    infor = () : Observable<Object> =>{
        return this.http.get(API_URL.USER_INFOR,HEADER_COMON_ACCESSTOKEN);
    }
}