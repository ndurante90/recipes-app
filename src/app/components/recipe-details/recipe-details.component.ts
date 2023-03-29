import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipes';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: Recipe | undefined;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute){
    this.route.params.subscribe(
      (res) => {
        console.log(res);
        //then i have to retrieve recipe not with http request but instead searching into store
        //for now i make an api request

        this.recipeService.getRecipeDetails(Number(res["id"])).subscribe(
          (res) => {
            this.recipe = res
          }
        )



      }
    )
  }

}
