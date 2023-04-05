import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON_ACCESSTOKEN } from 'src/utils/constant';
import { CategoryDTO } from '../model/CategoryDTO';

@Injectable({
    providedIn:'root',
})
export class NavModulService {
    constructor(private http: HttpClient) { }

    searchAllCategory = () =>{
        return this.http.get(API_URL.CATEGORY_ALL,HEADER_COMON_ACCESSTOKEN);
    }

    nodeRoot = (array: CategoryDTO[]) : CategoryDTO[]=>{
        let result = array.filter(item => item.parentId===null);
        return result;
    }
    
    nodeChild = (array: CategoryDTO[],input:CategoryDTO) : CategoryDTO[] =>{
        let result = array.filter(item => item.parentId===input.id);
        return result;
    }

}