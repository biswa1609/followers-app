import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isSelected:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isSelected= !this.isSelected;
  }
}
