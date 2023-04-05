import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from  '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { StarRatingComponentModule } from './shared/components/star-rating/star-rating.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { RecipeCategoryNamePipe } from './shared/pipes/recipe-category-name.pipe';
import { RecipeCategoryService } from './services/recipe-category.service';
import { DraggableDirective } from './shared/directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    RecipeDetailsComponent,
    RecipeCategoryNamePipe,
    DraggableDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    StarRatingComponentModule,
    RouterModule.forRoot(
      [
        {
          path: 'list',
          component: RecipesListComponent,
        },
        {
          path: 'add',
          component: AddRecipeComponent
        },
        {
          path: 'recipe',
          children: [
            { path: 'details/:id', component: RecipeDetailsComponent }
          ]
        }
      ]
    )
  ],
  providers: [ RecipeCategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
