import { Component, Type } from '@angular/core';

export type AUTH = {
    email: any,
    password: any
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