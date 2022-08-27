import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http:HttpClient) { }

    _url="http://localhost:3000/serverData"

    getData(){
        return this.http.get(this._url)
    }

    
}