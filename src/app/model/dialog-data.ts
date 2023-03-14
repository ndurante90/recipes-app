import { Observable } from "rxjs";

export interface DialogActions {
    name: string;
    action: () => any;
    //if closeDialog is true, the action is executed and if all is ok the dialog closes
    //otherwise dialog still be opened
    closeDialog?: boolean;
}

export interface DialogOptions {
  title?: string;
  content: string;
}

export interface DialogData {
   component$?: Observable<any>;
   dialogOptions?: DialogOptions;
   dialogActions?: DialogActions[];
}
