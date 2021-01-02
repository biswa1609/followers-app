import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[`
  .glyphicon
  {
    color:green
  }
  `]
  
})

export class FavoriteComponent implements OnInit {

  @Input('is-Favorite') isFavorite:boolean;
  @Output() onChange = new EventEmitter();
  @Output() eventPassing = new EventEmitter();
  //Allaising output component
  @Output('objectPassing') objectPassing = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.isFavorite = !this.isFavorite;
    this.onChange.emit();  
    this.eventPassing.emit(this.isFavorite);
    this.objectPassing.emit({newValue:this.isFavorite});
    //passing event and validating 
    //console.log("email value: ", this.email);
  }
  

  

}
export interface IFavoriteComponent {
  newValue:boolean
}

