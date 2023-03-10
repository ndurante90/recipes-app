import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public postRecipe(recipe: Recipe): Observable<any> {
    return this.httpService.post(this.baseUrl, recipe);
  }

  public deleteRecipe(id: string): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/${id}`);
  }

}
