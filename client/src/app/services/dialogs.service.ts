import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BigDialog, SmallDialog, DialogActions, DialogConfig, DialogData, DialogOptions } from '../model/dialog-data';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openDialog<T>(config: DialogConfig<T>): MatDialogRef<ConfirmationDialogComponent> {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    return dialogRef;

  }

  public openBigDialog<T>(title: string, componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]): MatDialogRef<ConfirmationDialogComponent> {

    const config = new BigDialog<T>(title, componentType, value, actions);

    const dialogRef = this.openDialog(config);

    return dialogRef;

  }

  public openSmallDialog<T>(title: string, componentType?: ComponentType<T>, value?: any, actions?: DialogActions[]): MatDialogRef<ConfirmationDialogComponent> {

    const config = new SmallDialog<T>(title, componentType, value, actions);

    const dialogRef = this.openDialog(config);

    return dialogRef;

  }






  public closeDialog<T>(dialogRef: MatDialogRef<ConfirmationDialogComponent, DialogData<T>>) {
     dialogRef.close();
  }

}
