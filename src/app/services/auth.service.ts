import { Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt'
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }
//
  login(credentials):Observable<any> { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).pipe(map(
        response=>{
          let result = response.json();
          if(result && result.token)
          {
           localStorage.setItem('token',result.token);
            return true;
          }
          return false; 
        }
      ));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    //return tokenNotExpired()
   var jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
      return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    console.log(expirationDate);
    console.log(isExpired);
    return true;
  }
  get currentUser()
  {
    var jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
      return null;
     // console.log(jwtHelper.decodeToken(token));
    return  jwtHelper.decodeToken(token);


  }
}

