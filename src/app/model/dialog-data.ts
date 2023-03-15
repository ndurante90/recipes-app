import { ComponentType } from "@angular/cdk/portal";
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
