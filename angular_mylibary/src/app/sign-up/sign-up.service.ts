import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';
import { SIGNUP } from 'src/utils/types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root',
})
export class SignUpService {

    constructor(private http: HttpClient) { }

    signUp = (user : SIGNUP) : Observable<Object> => {
        return this.http.post(API_URL.SIGNUP,user,HEADER_COMON);
    }
}