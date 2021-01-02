import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(service:CourseService) { 
    //let service = new CourseService();
    this.courses = service.getCourses();

  }

  ngOnInit(): void {
  }

viewMode="map";
  title = "List of Angular Course";
isActive = true;
courses;
colspan = 2;
imageUrl = "http://lorempixel.com/400/200/";
email2 = "me@example.com";

//calling service 
    /*constructor()
    {
        let service = new CoursesService();
        this.courses = service.getCourses();
    }*/
   /* constructor(service:CoursesService)
    {
       // let service = new CoursesService();
        this.courses = service.getCourses();
    }*/
    //Button click event call

    onSave()
    {
        this.isActive == true?this.isActive= false:this.isActive = true;
        console.log("Button was clicked");
        console.log("isActive value "+ this.isActive);
    }
    eventOnSave($event)
    {
        
        this.isActive == true?this.isActive= false:this.isActive = true;
        console.log("Button was clicked" ,$event);
        console.log("isActive value "+ this.isActive);
    }
    div1Click($event)
    {
        $event.stopPropagation();
        this.isActive == true?this.isActive= false:this.isActive = true;
        console.log("Div1 was clicked");
        
    }
    div2Click()
    {
        this.isActive == true?this.isActive= false:this.isActive = true;
        console.log("Div2 was clicked");
        
    }
    //Traditional way 
    onKeyup($event)
    {
        if ($event.keyCode == 13) {
            console.log("Enter was pressed" + $event.target.value);
        }
    }
    onKeyUpEnter($event, email)
    {
        console.log("Enter was pressed with value: " + email);
    }
    buttonOnClick($event)
    {
        this.isActive == true?this.isActive= false:this.isActive = true;
        console.log("Button Enter was pressed");
    }
    onKeyUpEnterBinding()
    {
        console.log("Value in text box: "+ this.email2);
    }
    twoWayBinding()
    {
        console.log("Value in text box: "+ this.email2);
    }

}


