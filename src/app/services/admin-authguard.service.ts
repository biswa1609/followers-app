import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguard  implements CanActivate{

  constructor(private auth: AuthService , private router: Router) { 
   
  }
  canActivate()
  {
    let user = this.auth.currentUser;
    //console.log(this.auth.currentUser);
    if(user && user.admin)
      return true;
    else
      this.router.navigate(['no-access'])
}
}
