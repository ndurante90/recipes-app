import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogActions, DialogData } from 'src/app/model/dialog-data';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})

/** Component that display a dialog and performed or not an action */
export class ConfirmationDialogComponent  {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData)
  {

  }

  handleAction(dialogAction: DialogActions){
    const val = dialogAction.action();
    val.subscribe(
      (res: any) => {
        console.log(res);

        alert('Operazione completata');

        if(dialogAction.closeDialog) {
          this.dialogRef.close();
        }
      },
      (err: any) => console.log(err)
    );
  }
}
