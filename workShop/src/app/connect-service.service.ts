import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectServiceService {

  constructor(private http:HttpClient) { }

  login(emial:string,pass:string):boolean{
    this.http.get<any>('assets/auth.json').subscribe(d=>{
      console.log(d)
      if(d.username==emial && d.password==pass){
        return true
      }
     return false
    })
 return false
  }

  getData():Observable<any>{
   return this.http.get<any>('https://dummyjson.com/products')
  }
 getToken():boolean{
  
  return true
 }
}
