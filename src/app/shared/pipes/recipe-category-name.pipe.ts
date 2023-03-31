import { Pipe, PipeTransform } from '@angular/core';
import { RecipeCategoryService } from 'src/app/services/recipe-category.service';

@Pipe({
  name: 'recipeCategoryName'
})
export class RecipeCategoryNamePipe implements PipeTransform {

  constructor(private recipeCategoriesService: RecipeCategoryService){

  }

  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    if(value){
      return this.recipeCategoriesService.categories.find(cat=> cat.id == value)?.description;
    }

    return undefined;
  }
}
