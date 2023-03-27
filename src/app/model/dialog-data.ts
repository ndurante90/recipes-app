import { ComponentType } from "@angular/cdk/portal";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";

export interface DialogActions {
    label: string;
    action: () => any;
    //if closeDialog is true, the action is executed and if all is ok the dialog closes
    //otherwise dialog still be opened
    closeDialog?: boolean;
}

export interface DialogOptions {
  title?: string;
  content: string;
}

export interface DialogData<T> {
   componentType: ComponentType<T>;
   dialogOptions?: DialogOptions;
   dialogActions?: DialogActions[];
}

export class DialogConfig<T> extends MatDialogConfig {
  constructor(title: string, componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]){
    super();

    this.panelClass = "custom-dialog-panel";

    this.data = {};

    this.data.title = title;

    if(componentType){
       this.data.componentType = componentType;
    }

    this.data.value = value;

    this.data.fromDialog = true;

    this.data.actions = actions;
  }
}

export class BigDialog<T> extends DialogConfig<T> {
  constructor(title: string, componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]){
    super(title, componentType, value, actions);
    this.width = "800px";
    this.height = "600px";
  }
}

export class SmallDialog<T> extends DialogConfig<T> {
  constructor(title: string, componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]){
    super(title, componentType, value, actions);
    this.width = "380px";
    this.height = "200px";
  }
}
