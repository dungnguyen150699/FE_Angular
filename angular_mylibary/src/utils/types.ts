import { Component, Type } from '@angular/core';
import { CategoryDTO } from 'src/app/model/CategoryDTO';

export type AUTH = {
    email: any,
    password: any
}

export type SIGNUP = {
    email: string,
    name: string,
    password : string
}

export type API_URLTYPE = {
    api : string,
    url : string
}

export type User = {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
}

export type LoginResponse = {
    accessToken:string;
    tokenType:string;
    email:string;
    username:string;
    authorities:[
        {
            authority:string
        }
    ];
}

export type Book = {
    id : number|undefined;
	name : string ;
	img: any |undefined;
	price: number|undefined;
	count: number|undefined;
	category: CategoryDTO|undefined;
}