import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogActions } from 'src/app/model/dialog-data';
import { Recipe } from 'src/app/model/recipes';
import { DialogsService } from 'src/app/services/dialogs.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: Recipe | undefined;

  constructor(private recipeService: RecipesService,
              private dialogsService: DialogsService,
              private route: ActivatedRoute,
              private router: Router
             ) {
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

  updateRecipe(): void {
    const dialogRef = this.dialogsService.openBigDialog("Modifica Ricetta", AddRecipeComponent, this.recipe);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.recipe = result
      }
    });
  }

  deleteRecipe(id: string): void {


      const actions: DialogActions[] = [
        { label: 'Elimina', action: () => { return this.recipeService.deleteRecipe(id); }, closeDialog: true }
      ];

      const dialogRef = this.dialogsService.openSmallDialog("Elimina Ricetta", undefined, { content: "Are you sure you want to delete this item?" }, actions);

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.router.navigate(['/list']);
        }
      });
  }

}
