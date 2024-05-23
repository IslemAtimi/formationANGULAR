import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products2Service {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>("https://dummyjson.com/products")
  }
  getProductById(id:string):Observable<any>{
    return this.http.get<any>("https://dummyjson.com/products/"+id)  
  }
}
