import { DataService } from './../common/data-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowerService extends DataService{

  constructor(http:HttpClient) {
    super(http,'https://api.github.com/users/mosh-hamedani/followers')
   }
}
