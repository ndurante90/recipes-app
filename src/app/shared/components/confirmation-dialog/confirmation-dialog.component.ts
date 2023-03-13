import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})

/** Component that display a dialog and performed or not an action */
export class ConfirmationDialogComponent {

  constructor(public dialogRef:  MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: {title: string})
  {
  }


  closeDialog(){
    this.dialogRef.close({event: 'delete'});
  }

}
