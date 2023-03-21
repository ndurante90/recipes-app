import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "./recipes";

export enum Operation{
  Add,
  Edit
}

@Component({
  selector: 'app-add-recipe',
  template: '',
  styles: []
})

export class GenericEditor<T> implements OnInit{

  @Input() value: T | undefined;
  @Input() fromDialog: boolean = false; //remove

  @Output() onOperationCompleted: EventEmitter<any> = new EventEmitter();

  protected mode: Operation = Operation.Add;

  ngOnInit(): void {
    this.mode = this.value != undefined ? Operation.Edit : Operation.Add;
  }
}

