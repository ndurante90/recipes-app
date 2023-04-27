import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, map, startWith, of } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-selector',
  templateUrl: './ingredients-selector.component.html',
  styleUrls: ['./ingredients-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IngredientsSelectorComponent),
      multi: true
    }
  ]
})

export class IngredientsSelectorComponent implements ControlValueAccessor {
  pills: Ingredient[] = []; // l'array di valori selezionati dall'utente
  suggestions: Observable<string[]> = of([]); // l'array di suggerimenti per il completamento automatico
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private ingredientsService: IngredientsService) {}

  // metodo per recuperare la lista dei suggerimenti dall'API
  getSuggestions($event: any): Observable<string[]> {
    let value = $event.target.value;
    return this.ingredientsService.getIngredients().pipe(
      map(response => response.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase())).map(item => item.name))
    );
   /* return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase())).map(item => item.name))
    );*/
  }

  // metodo per aggiungere una pillola alla lista di valori selezionati dall'utente
  addPill($event: any) {
    if($event){
      if(!this.pills.find(v => v.name == $event)){
        this.pills.push({id: 'asdasd', name: $event});
        this.onChange(this.pills);
      }
    }
   /* console.log($event);
    let value = $event;
    if (value && !this.pills.includes(value)) {
      this.pills.push(value);
      this.onChange(this.pills);
    }*/
  }

  // metodo per rimuovere una pillola dalla lista di valori selezionati dall'utente
  removePill(index: number) {
    this.pills.splice(index, 1);
    this.onChange(this.pills);
  }

  // implementazione dei metodi dell'interfaccia ControlValueAccessor
  writeValue(value: any) {
    if (value !== undefined) {
      this.pills = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
