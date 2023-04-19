import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  baseUrl: string = environment.apiUrl + "/ingredients";

  constructor(private httpService: HttpClient) { }


  public getIngredients(): Observable<Ingredient[]> {
    return this.httpService.get<Ingredient[]>(this.baseUrl+"/list");
  }

}
