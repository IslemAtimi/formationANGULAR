import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectServiceService } from './connect-service.service';

@Injectable({
  providedIn: 'root'
})
export class PhaseTowGuardService implements CanActivate {

  constructor(private service:ConnectServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.service.getToken()) return true
   else return false
  }
}
