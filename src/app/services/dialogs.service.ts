import { DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogActions, DialogData, DialogOptions } from '../model/dialog-data';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openDialog(dynamicComponents$?: Observable<any>, options?: DialogOptions, actions?: DialogActions[]): MatDialogRef<ConfirmationDialogComponent, DialogData> {

    let dynamicContent: any = dynamicComponents$;

    const dialogData: DialogData = { component$: dynamicContent, dialogOptions: options, dialogActions: actions  };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: dialogData});

    this.registerActions(dialogRef);

    return dialogRef;

  }


  public registerActions(dialogRef: MatDialogRef<ConfirmationDialogComponent, DialogData>) {
    /*dialogRef.afterClosed().subscribe(
      data => {
        console.log('here');
        if(data. == 'delete'){
           this.deleteItem(id);
        }
      }
    )*/
  }


  public closeDialog(dialogRef: MatDialogRef<ConfirmationDialogComponent, DialogData>) {
     dialogRef.close();
  }

}
