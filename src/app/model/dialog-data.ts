import { ComponentType } from "@angular/cdk/portal";
import { MatDialogConfig } from "@angular/material/dialog";
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


export class DialogConfig<T> extends MatDialogConfig{
  constructor(componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]){
    super();
    this.data = {};
    if(componentType){
       this.data.componentType = componentType;
    }

    this.data.value = value;

    this.data.fromDialog = true;

    this.data.actions = actions;
  }
}
