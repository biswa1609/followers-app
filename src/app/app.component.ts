import { IFavoriteComponent } from './favorite/favorite.component';
import { EmailService } from './email.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app!!!!';
  //isFavorite:boolean
  post=
  {
    title: "title",
    isFavorite: false
  };
  onFavoriteChange()
  {
    console.log("Favorite event changed")
  }
  onEventPassing(event)
  {
    console.log("Favorite event changed: ",event)
  }
  onObjectPassing(args:IFavoriteComponent)
  {
    console.log("Favorite event changed: ",args)
  }
}
