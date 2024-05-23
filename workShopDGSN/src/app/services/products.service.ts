import { Injectable } from '@angular/core';
import { Product } from '../models/productModels';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  products:Product[]=[]

  add(){
    let product={
      id:1,
      title:'test',
      price:10
    }
    this.products.push(product)
  }

  afficher(){
    console.log(this.products)
  }

  getProducts():Product[]{
    return this.products
  }

  getProductsFromApi():Observable<any>{
    return this.http.get<any>("https://dummyjson.com/products")
  }

  getProductById(id:string):Observable<any>{
    return this.http.get<any>("https://dummyjson.com/products/"+id)  
  }



}


