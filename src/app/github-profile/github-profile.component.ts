import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  username:any;
  id:any

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
      
    ])
    .subscribe(parms=>{
      console.log('username:'+parms[0].get('username'));
      console.log('page:'+parms[1].get('page'));

      this.username = parms[0].get('username');
      this.id = parms[1].get('page')
    });
    /*this.route.paramMap.subscribe(parms=>{
      console.log(parms.get('username'))
    });
    this.route.queryParamMap.subscribe(query=>{
        console.log(query.get('page'))
    });*/
  }
  onSubmit()
  {
    this.router.navigate(['/followers'])
  }

}
