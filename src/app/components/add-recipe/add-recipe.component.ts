import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import RecipeCategory from 'src/app/model/recipe-category';
import { Validators } from '@angular/forms';
import { RecipeCategoryService } from 'src/app/services/recipe-category.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/model/recipes';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent {

  form: FormGroup;
  categories: RecipeCategory[] | undefined;
  formSubmitted: boolean = false;

  constructor(private recipesService: RecipesService, private recipeCategoryService: RecipeCategoryService) {

    this.categories = this.recipeCategoryService.getRecipeCategories();

    this.form = new FormGroup({
      name : new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(100)),
      difficult: new FormControl('')
    });

    Object.keys(this.form.controls).forEach(
      (key) => {
        this.form.controls[key].valueChanges.subscribe(
          (value) => console.log(value)
        )
      }
    );
  }

  get Name() { return this.form.get('name'); }

  get Category() { return this.form.get('category'); }

  onSubmit() {
    this.formSubmitted = true;

    if(this.form.valid){
      //make API post call
      alert(JSON.stringify(this.form.value));
      const newRecipe: Recipe =  Object.assign({ creationDate: new Date() }, this.form.value);

      this.recipesService.postRecipe(newRecipe).subscribe(
        (res) => console.log(res)
      );
    }
  }
}
