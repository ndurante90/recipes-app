import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  baseUrl: string = environment.apiUrl + "/ingredients";

  private data: Ingredient[] | undefined;

  constructor(private httpService: HttpClient) { }


  public getIngredients(): Observable<Ingredient[]> {
    if(this.data){
       return of(this.data);
    }else{
       return this.httpService.get<Ingredient[]>(this.baseUrl+"/list").pipe(tap( (data) => this.data = data ));
    }
  }
}
