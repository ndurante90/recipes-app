import { Component, Input } from "@angular/core";
import { Recipe } from "./recipes";

@Component({
  selector: 'app-add-recipe',
  template: '',
  styles: []
})

export class GenericEditor<T>{

  @Input() value: Recipe | undefined;
  @Input() fromDialog: boolean = false;

}

