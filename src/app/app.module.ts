import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    NavbarComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'list',
          component: RecipesListComponent,
        },
        {
          path: 'add',
          component: AddRecipeComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
