import { throwError } from 'rxjs';
import { NotFoundError } from './../common/app-notfound';
import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service:GithubFollowerService) { }
  followers:any[]
  ngOnInit(): void {
    this.service.getAll()
        .subscribe(response=>{this.followers=response},
              (error:Response)=>{
                if(error instanceof NotFoundError)
                  alert("Invalid Url")
                else
                  return throwError(error);
              })
  }

}
