import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';

@Injectable({
    providedIn:'root',
})
export class ManagementUserService {
    constructor(private http: HttpClient) { }

}