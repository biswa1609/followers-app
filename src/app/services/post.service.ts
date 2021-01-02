import { DataService } from './../common/data-service';
import { BadRequest } from './../common/app-badrequest';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/app-notfound';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService  extends DataService{

  //jsonplaceholder='http://jsonplaceholder.typicode.com/posts';
  constructor( http:HttpClient) { 
    super(http,'http://jsonplaceholder.typicode.com/posts')
  }
  //private url='http://jsonplaceholder.typicode.com/posts';
  //private invalidurl='https://www.example.com/product/stretchy-bracelet-crackled-quartz/false';
  
}
