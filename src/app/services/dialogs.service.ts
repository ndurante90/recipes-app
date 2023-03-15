import { DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogActions, DialogData, DialogOptions } from '../model/dialog-data';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openDialog<T>(componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]): MatDialogRef<ConfirmationDialogComponent> {

    const config = new MatDialogConfig();

    config.data = {};

    if(componentType){
      config.data.componentType = componentType;
    }

    config.data.value = value;

    config.data.actions = actions;

    //const dialogData: DialogData<T> = { componentType: componentType, dialogOptions: options, dialogActions: actions  };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    return dialogRef;

  }




  public closeDialog<T>(dialogRef: MatDialogRef<ConfirmationDialogComponent, DialogData<T>>) {
     dialogRef.close();
  }

}
