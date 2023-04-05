import { Injectable } from '@angular/core';
import RecipeCategory from '../model/recipe-category';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {

  categories: RecipeCategory[] = [];

  constructor() {
    this.categories = this.getRecipeCategories();
  }

  public getRecipeCategories(): RecipeCategory[] {
    return <RecipeCategory[]> [
      { id:"adadasd", value: 0, description: 'Street Food' },
      { id: "sddadasd", value: 1, description: 'Breakfast' }
    ];
  }
}
