import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectServiceService } from './connect-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private service:ConnectServiceService) {}
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Get the auth header from the service
     
    
      var token=localStorage.getItem("token")??this.service.getToken()
      console.log(token)
      
      // Clone the request to add the new header
     const authReq = req.clone({headers: req.headers.set('Authorization', "kjhlezijmofdekzmok")});
      // Pass on the cloned request instead of the original request
     return next.handle(authReq);
  }
}

