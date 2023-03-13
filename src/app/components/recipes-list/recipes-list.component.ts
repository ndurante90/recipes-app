import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private recipesService: RecipesService, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(
      (res) => this.recipes = res
    );
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: { title: 'Delete a recipe'}});

    dialogRef.afterClosed().subscribe(
      data => {
        if(data.event == 'delete'){
           this.deleteItem(id);
        }
      }
    )
  }

  deleteItem(id: string){
     this.recipesService.deleteRecipe(id).subscribe(
          (res) => {
            this.recipes = this.recipes?.filter((recipe) => recipe.id != id);
          }
    );
  }
}
