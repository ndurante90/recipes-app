import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { DialogActions } from 'src/app/model/dialog-data';
import { DialogsService } from 'src/app/services/dialogs.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { AddRecipeComponent } from '../../../app/components/add-recipe/add-recipe.component';
import { Recipe } from '../../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [];


  private editRecipe$
  = from(import('../../../app/components/add-recipe/add-recipe.component').then(component => component.AddRecipeComponent));

  constructor(private recipesService: RecipesService,
    private dialog: MatDialog, private dialogsService: DialogsService, private router: Router){
  }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(
      (res) => this.recipes = res
    );
  }

  openDeleteDialog(event:any, id: string): void {
    event.stopPropagation();
    const actions: DialogActions[] = [
      { label: 'Elimina', action: () => { return this.deleteItem(id) }, closeDialog: true }
    ];

    const dialogRef = this.dialogsService.openSmallDialog('', undefined, { content: "Are you sure you want to delete this item?" }, actions);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.recipes = this.recipes.filter(recipe => recipe.id != result);
      }
    });
  }

  addRecipe(){

    const componentType = AddRecipeComponent;

    const dialogRef = this.dialogsService.openBigDialog('Aggiungi Recipe', componentType);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let results = this.recipes.filter(recipe => recipe.id != result.id);
        this.recipes = [...results, result];
      }
    });


  }

  editRecipe(event: any, recipe: Recipe) {
    event.stopPropagation();
    const componentType = AddRecipeComponent;

    const dialogRef = this.dialogsService.openBigDialog('Modifica Recipe', componentType, recipe);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let results = this.recipes.filter(recipe => recipe.id != result.id);
        this.recipes = [...results, result];
      }
    });
  }

  deleteItem(id: string): Observable<any> {
     return this.recipesService.deleteRecipe(id);
  }

  updateItem(recipe: Recipe): Observable<object> {
    return this.recipesService.updateRecipe(recipe);
 }

 goToDetails(recipe: Recipe){
  this.router.navigate([`recipe/details/${recipe.id}`]);
 }


}
