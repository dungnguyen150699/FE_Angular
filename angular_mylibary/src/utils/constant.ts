import { LoginComponent } from '../app/login/login.component';
import { Oauth2RedirectComponent } from '../app/oauth2-redirect/oauth2-redirect.component';
import { HttpHeaders } from "@angular/common/http";

export const ACCESS_TOKEN:string = 'accessToken';

const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
}

export const HEADER_COMON = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
};  

const headerIncludeAccessToken = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
}

export const HEADER_COMON_ACCESSTOKEN = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerIncludeAccessToken), 
};  


export class API_URL{
    // auth
    static LOGIN : string  = "http://localhost:8083/auth/login";
    static USER_INFOR : string = "http://localhost:8083/user/infor";
    // category
    static CATEGORY_ALL:string = "http://localhost:8083/category/searchAll" 

}
