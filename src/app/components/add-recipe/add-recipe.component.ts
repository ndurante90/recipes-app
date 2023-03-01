import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import RecipeCategory from 'src/app/model/recipe-category';
import { Validators } from '@angular/forms';
import { RecipeCategoryService } from 'src/app/services/recipe-category.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  form: FormGroup;
  categories: RecipeCategory[] | undefined;
  formSubmitted: boolean = false;

  constructor(private recipeCategoryService: RecipeCategoryService) {

    this.categories = this.recipeCategoryService.getRecipeCategories();
    
    this.form = new FormGroup({
      recipe_name : new FormControl('', Validators.required),
      recipe_category: new FormControl('', Validators.required),
      recipe_description: new FormControl('', Validators.maxLength(100))
    });

    Object.keys(this.form.controls).forEach(
      (key) => {
        this.form.controls[key].valueChanges.subscribe(
          (value) => console.log(value)
        )
      }
    );
  }

  get recipeName() { return this.form.get('recipe_name'); }

  get recipeCategory() { return this.form.get('recipe_category'); }

  onSubmit() {
    this.formSubmitted = true;

    if(this.form.valid){
      //make API post call
      alert(JSON.stringify(this.form.value));
    }
  }
}
