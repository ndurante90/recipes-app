import { Component, Input } from '@angular/core';
import { Recipe } from '../../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes : Recipe[] | undefined;

  constructor(){
    this.recipes = [{
      id: '1',
      name: 'Pulled Pork',
      category: 'Street Food',
      description: 'Hamburger with beef, tomato',
      creationDate: new Date(),
      difficult: 2
   }, {
    id: '2',
    name: 'Orange Juice',
    category: 'Breakfast',
    description: 'An Orange Juice rich in vitamin C',
    creationDate: new Date(),
    difficult: 1
   }];

  }

}
