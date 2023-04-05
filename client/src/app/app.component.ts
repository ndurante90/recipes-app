import { Component } from '@angular/core';
import { Recipe } from './model/recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-app';

  constructor(){
  }
}
