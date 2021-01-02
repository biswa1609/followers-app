import { NotFoundError } from './app-notfound';
import { BadRequest } from './../common/app-badrequest';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';


export class DataService {

  constructor(private http:HttpClient, private url:string) { }
  //private url='http://jsonplaceholder.typicode.com/posts';
  //private invalidurl='https://www.example.com/product/stretchy-bracelet-crackled-quartz/false';
  create(response)
  {
    //return throwError(new BadRequest());
    return this.http.post(this.url,JSON.stringify(response)).pipe(
      catchError((error:Response)=>{
        return this.handleError
      }));
  }
  getAll()
  {
      return this.http.get<any[]>(this.url)
                .pipe(catchError((error:Response)=>{
                     return this.handleError;
                }));
  }
  patch(response)
  {
    return this.http.patch(this.url+'/'+response.id,JSON.stringify({id:200}))
                    .pipe(catchError((error:Response)=>{
                      return this.handleError;
                    }));
  }
  delete(response)
  {
    //return throwError(new NotFoundError())
    return this.http.delete(this.url+'/'+response.id).pipe(
      catchError((error:Response)=>{
        return this.handleError
      }));
  }
  deleteError(response)
  {
    //return throwError(new NotFoundError());
    return this.http.delete(this.url+'/'+ 345).pipe(
      catchError((error:Response)=>{
        return this.handleError
      }));
  }
  private handleError(error:Response)
  {
    if(error.status === 400)
          return throwError(new BadRequest())
    if(error.status === 404)
          return throwError(new NotFoundError())
   else
          return throwError(new AppError(error))
  }

}
