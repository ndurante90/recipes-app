import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import RecipeCategory from 'src/app/model/recipe-category';
import { Validators } from '@angular/forms';
import { RecipeCategoryService } from 'src/app/services/recipe-category.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Operation, GenericEditor } from 'src/app/model/generic-editor';
import { Recipe } from 'src/app/model/recipes';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingComponentModule } from 'src/app/shared/components/star-rating/star-rating.component';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';

@Component({
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatButtonModule, StarRatingComponentModule],
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent extends GenericEditor<Recipe> implements OnInit {

  //this might be inserted in a superclass<T>, so then I can extend each
  //class and I have the same input "value"
  //@Input() value: Recipe | undefined;

  form: FormGroup = new FormGroup({});
  categories: RecipeCategory[] | undefined;
  formSubmitted: boolean = false;

  constructor(private recipesService: RecipesService, private recipeCategoryService: RecipeCategoryService) {

    super();

    this.categories = this.recipeCategoryService.categories;

  /*  this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(100)),
      difficulty: new FormControl(''),
      peopleNumber: new FormControl(''),
      ingredients: new FormControl('')
    });*/

   /* Object.keys(this.form.controls).forEach(
      (key) => {
        this.form.controls[key].valueChanges.subscribe(
          (value) => console.log(value)
        )
      }
    );*/
  }

  override ngOnInit(): void {

    super.ngOnInit();

    this.setFormGroup();

  }

  get Name() { return this.form.get('name'); }

  get Category() { return this.form.get('category'); }

  setFormGroup(){

    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(100)),
      difficulty: new FormControl(''),
      peopleNumber: new FormControl(''),
      ingredients: new FormControl('')
    });

    if(this.value) {
      this.value = this.value as Recipe;
      Object.keys(this.form.controls).forEach(
        (key) => {
          this.form.controls[key].setValue(this.value?.[key as keyof Recipe]);
        }
      )
    }

  }

  onSubmit() {
    this.formSubmitted = true;

    if(this.form.valid) {
      if(this.mode === Operation.Add){
        //make API post call
        alert(JSON.stringify(this.form.value));
        const newRecipe: Recipe =  Object.assign({ creationDate: new Date() }, this.form.value);
        this.add(newRecipe);
      }

      if(this.mode === Operation.Edit){
        const recipe: Recipe =  this.form.value;
        this.edit(recipe);
      }
    }
  }

  add(item: Recipe): void {
    this.recipesService.postRecipe(item).subscribe(
      (res) => {
        console.log(res);
        this.onOperationCompleted.emit(res);
      }
   );
  }

  edit(item: Recipe): void {
    this.recipesService.updateRecipe(item).subscribe(
      (res) => {
        console.log(res)
        //if(this.fromDialog)
        this.onOperationCompleted.emit(res);
      }
    );
  }

}
