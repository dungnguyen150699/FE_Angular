import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';

@Injectable({
    providedIn:'root',
})
export class LoginService {

    constructor(private http: HttpClient) { }

    auth = (user:any) =>{
        return this.http.post(API_URL.LOGIN,user,HEADER_COMON)
    }

    infor = () =>{
        return this.http.get(API_URL.USER_INFOR,HEADER_COMON_ACCESSTOKEN);
    }
}