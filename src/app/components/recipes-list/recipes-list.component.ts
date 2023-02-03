import { Component, Input } from '@angular/core';
import { Recipe } from '../../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Input() recipes : Recipe[] | undefined;

  constructor(){

  }

}
