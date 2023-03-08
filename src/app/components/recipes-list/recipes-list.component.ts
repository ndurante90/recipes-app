import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] | undefined;

  constructor(private recipesService: RecipesService){

  }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(
      (res) => this.recipes = res
    );

  }
}
