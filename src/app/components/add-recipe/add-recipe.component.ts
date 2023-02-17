import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      recipe_name : new FormControl(''),
      recipe_description: new FormControl('')
    });

    Object.keys(this.form.controls).forEach(
      (key) => {
        this.form.controls[key].valueChanges.subscribe(
          (value) => console.log(value)
        )
      }
    );
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
