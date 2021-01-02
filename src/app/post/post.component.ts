import { BadRequest } from './../common/app-badrequest';
import { NotFoundError } from './../common/app-notfound';
import { AppError } from './../common/app-error';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

interface Post{
  id:string,
  title:string,
}


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit{
  details:any
  result: Array<any>
 // private Url='http://jsonplaceholder.typicode.com/posts';
 
  constructor(private service:PostService) { 
    
        //this.result.push(this.details);
        
  }
  form = new FormGroup({
    title:new FormControl('',Validators.minLength(5))
  })
  
  get _title()
  {
    return this.form.get('title');
  }
  ngOnInit()
  {
    this.service.getAll()
            .subscribe((response)=>{
            //this.result = new Array<any>();
            this.result= response;
            //console.log(this.result);
    })
   // console.log(this.form);
  };
  
  onChange()
  {
    console.log(this.form.get('title'))
  }
  onEnterClick(input:HTMLInputElement)
  {
    var data:any = {title:input.value};
    this.result.splice(0,0,data);

      this.service.create(data)
        .subscribe(resposne=>{
          data.id = resposne['id'];
          
          }, 
          (error:AppError)=>{
            this.result.splice(0,1);
            if(error instanceof BadRequest)
            {
              return this.form.setErrors({invalidPost:true});
            }
            throw error;
          });
          input.value = '';
    
  
  }
  Update(input)
  {
    this.service.patch(input)
              .subscribe(response=>{
                console.log(response)
              })
  }
  DeletePost(input)
  {
    //input.id = 300;
    //console.log(input);
   // console.log(this.form);
   let index = this.result.indexOf(input);
   this.result.splice(index,1);

    this.service.delete(input)
              .subscribe(
                response=>{
                /*let index = this.result.indexOf(input);
                this.result.splice(index,1);*/
              },(error:AppError)=>{
                this.result.splice(index,0,input);

                if(error instanceof NotFoundError)
                {
                  this.form.setErrors({alreadyDeleted:true});
                }
                throw error;
              })
  
              
  }

  DeleteInvalidPost(input)
  {
    this.service.deleteError(input)
        .subscribe(response=>{
          console.log('Response....'+response);
        },(error:AppError)=>{
          
          if(error instanceof NotFoundError)
          {
            console.log('checking')
            this.form.setErrors({alreadyDeleted:true});
            alert("404 Error");
          }
          throw error;
        })
  }
  
 
}
