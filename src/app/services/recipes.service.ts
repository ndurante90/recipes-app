import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpService: HttpClient) {
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.httpService.get<Recipe[]>('/data/recipes.json');
    /*return [
      {
         id: '1',
         name: 'Pulled Pork',
         category: 'Street Food',
         description: 'Hamburger with beef, tomato',
         creationDate: new Date(),
         difficult: 2
      },
      {
          id: '2',
          name: 'Orange Juice',
          category: 'Breakfast',
          description: 'An Orange Juice rich in vitamin C',
          creationDate: new Date(),
          difficult: 1
      }];*/
  }
}
