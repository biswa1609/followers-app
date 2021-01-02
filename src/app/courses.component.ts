//import { Summary } from './course/summary.pipe';

import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        <h4>{{course}}</h4>
        </li>
    </ul>
    <img src = "{{ imageUrl }}" />
    <img [src] = "imageUrl" />

    <table border>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
        <tr>
            <td></td>
        </tr>
        
    </table>
    <button class="btn btn-primary" (keyup.enter) = "buttonOnClick($event)" [style.backgroundColor]="isActive? 'Yellow': 'Pink' " >Save</button>
    <!-- Class Binding-->
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <!-- Style Binding-->
    <button class="btn btn-primary" [style.backgroundColor]="isActive? 'Red': 'Green' ">Save</button><br><br>
    <!-- Event Binding -->
    <button class="btn btn-primary" [style.backgroundColor]="isActive? 'Grey': 'Green' " (click)="onSave()">Save</button>
    <!-- Event bubbling -->
    <div (click) = "div2Click()">
        <div (click)="div1Click($event)">
            <button class="btn btn-primary" [style.backgroundColor]="isActive? 'Yellow': 'Pink' " (click)="eventOnSave($event)">Save</button>
        </div>
    </div>
    <!-- Event filtering, Variable-->
    <input (keyup) = "onKeyup($event)"/> <br>
    <input #email (keyup.enter) = "onKeyUpEnter($event, email.value)"/><br>

    <!-- Two way binding-->
    <input value = "{{ email2 }}" (keyup.enter) = "email2 = $event.target.value; onKeyUpEnterBinding()"/><br>
    <!-- Two way binding using ngModel-->
    <input [(ngModel)] = "email2" (keyup.enter) = "twoWayBinding()"/><br>

    `
})
//
export class CoursesComponent {
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
    constructor(service:CoursesService)
    {
       // let service = new CoursesService();
        this.courses = service.getCourses();
    }
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
@Component({
    selector: 'Angular',
    template:
    `
    {{ course.title | uppercase}}<br>
    {{ course.rating | number: '1.2-2'}}<br>
    {{ course.student | number}}<br>
    {{ course.price | currency:'AUD': true}}<br>
    {{ course.date | date:'shortDate'}}<br>
    {{ course.longText | summary}}<br>

    `
})
export class AngularBasics
{
    //rupee &#8377
    course={
        title: "The Angular Course",
        rating: 234.56,
        student: 1234567,
        price: 40.567,
        date: new Date(2020,3,1),
        longText:"Angular (commonly referred to as Angular 2+ or Angular v2 and above)[3][4] is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",

    }

}