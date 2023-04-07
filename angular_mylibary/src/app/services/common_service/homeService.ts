import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';

@Injectable({
    providedIn:'root',
})
export class HomeService {
    constructor(private http: HttpClient) { }

    searchAllProduct = () =>{
        return this.http.get(API_URL.PRODUCT_ALL,HEADER_COMON_ACCESSTOKEN);
    }


}