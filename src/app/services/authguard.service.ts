import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate  {


  constructor(private auth:AuthService, private route: Router) { }
  canActivate(route,state:RouterStateSnapshot)
  {
    if(this.auth.isLoggedIn())
      return true;
    this.route.navigate(['/login'],{queryParams: {returnUrl: state.url}})

  }
}
