import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from '../model/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  baseUrl: string = 'http://localhost:3000/recipes';

  constructor(private httpService: HttpClient) {
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.httpService.get<Recipe[]>(this.baseUrl);
  }

  public getRecipeDetails(id: number): Observable<Recipe>{
    return this.httpService.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  public postRecipe(recipe: Recipe): Observable<any> {
    return this.httpService.post(this.baseUrl, recipe);
  }

  public updateRecipe(recipe:Recipe): Observable<object> {
    return this.httpService.patch(`${this.baseUrl}/${recipe.id}`, recipe);
  }

  public deleteRecipe(id: string): Observable<any> {
    //returns the id as response TO BE REMOVE WHEN I MAKE BACKEND
    return this.httpService.delete<Recipe>(`${this.baseUrl}/${id}`).pipe(map((obj: Recipe) => id));
  }

}
