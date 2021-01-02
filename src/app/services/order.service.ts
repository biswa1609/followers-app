import { Http ,ResponseOptions,Headers} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() { 
    let header =new Headers();
    let token = localStorage.getItem('token');
    header.append('Authorization','Bearer '+token);

    let option = new ResponseOptions({headers:header})
    return this.http.get('/api/orders',option);
  }
}
