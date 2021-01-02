import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { 
    this.courses = this.getCourses();
  }

  ngOnInit(): void {
  }
  viewMode="map";
  isSelected:boolean;
  //obj = new DirectiveComponent();
  courses;
  subjects=[
    {id:1, subject:"English"},
    {id:2, subject:"Maths"},
    {id:3, subject:"Hindi"},

  ]
  
   getCourses()
   {
     return ["Course1","Course2","Course3"];

   }
   addCourse()
   {
     this.subjects.push({id:4,subject:"Geography"})
   }
   deleteCourse(course)
   {
     let index = this.subjects.indexOf(course);
     this.subjects.splice(index,1);
   }
   updateCourse(course)
   {
    let index = this.subjects.indexOf(course);
    this.subjects[index].subject = "Social Studies";
   }
   onClick()
   {
     this.isSelected = !this.isSelected;
   }
   //this.courses =  
}
