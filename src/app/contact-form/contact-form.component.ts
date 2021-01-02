import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  _firstName:string;
  _typeBilling = [
    {id:1,type:"Email"},
    {id:2,type:"Phone"},
    {id:3,type:"Address"},
  ];
  _addressType =[
    {id:1,type:"Personal"},
    {id:2,type:"Office"}
  ];
  constructor() { }

  ngOnInit(): void {

  }
  onChange(firstName)
  {
    console.log(firstName);
  }
  submit(f)
  {
    console.log(f);
  }

}
