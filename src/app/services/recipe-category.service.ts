import { Injectable } from '@angular/core';
import RecipeCategory from '../model/recipe-category';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {

  constructor() { }

  public getRecipeCategories(): RecipeCategory[] {
    return <RecipeCategory[]> [
      { value: 0, description: 'Street Food' },
      { value: 1, description: 'Breakfast' }
    ];
  }
}
