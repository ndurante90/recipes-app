import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import RecipeCategory from 'src/app/model/recipe-category';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  form: FormGroup;
  categories: RecipeCategory[] | undefined;

  constructor() {

    this.categories = <RecipeCategory[]>[
      { value: 0, description: 'Street Food' },
      { value: 1, description: 'Breakfast' }
    ];
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

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
