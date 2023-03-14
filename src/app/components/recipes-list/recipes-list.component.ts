import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, Observable, of } from 'rxjs';
import { DialogsService } from 'src/app/services/dialogs.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Recipe } from '../../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] | undefined;
  private editRecipe$
  = from(import('../../../app/components/add-recipe/add-recipe.component').then(component => component.AddRecipeComponent));

  constructor(private recipesService: RecipesService, private dialog: MatDialog, private dialogsService: DialogsService){
  }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(
      (res) => this.recipes = res
    );
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialogsService.openDialog(undefined,
                       { content: 'Are you sure you want to delete this item?'},
                       [
                          {
                             name: 'Delete',
                             action: () => {
                               return this.deleteItem(id)
                             },
                             closeDialog: true
                          }
                        ]
                       );
    dialogRef.afterClosed().subscribe(
      data => {
         this.recipes = this.recipes?.filter(recipe => recipe.id != id);
      }
    );

  }

  editRecipe(id: string){
    const dialogRef = this.dialogsService.openDialog(this.editRecipe$,
      undefined,
      [
       {
         name: 'Edit',
         action: () => {
           return null
         },
         closeDialog: true
        }
     ]
      );
  }

  deleteItem(id: string): Observable<any> {
     return this.recipesService.deleteRecipe(id);
  }


}
