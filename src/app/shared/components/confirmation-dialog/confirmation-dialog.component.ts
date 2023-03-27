import { Component, ComponentFactoryResolver, ComponentRef, Inject, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogActions, DialogData } from 'src/app/model/dialog-data';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})

/** Component that display a dialog and performed or not an action */
export class ConfirmationDialogComponent implements OnInit  {

 // @Input() componentType: Type<any> | undefined;

 componentType: Type<any> | undefined;
  constructor(
    private dialog: MatDialogRef<ConfirmationDialogComponent>,
    private viewContainerRef: ViewContainerRef,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, componentType: Type<any>, value: any, actions?: DialogActions[] }
    )
  {
    this.componentType = data.componentType;
  }


  ngOnInit(): void {
    // Load and render the content component
    if(this.componentType){
      //const componentFactory = this.resolver.resolveComponentFactory(this.componentType);
      const componentRef = this.viewContainerRef.createComponent(this.componentType);
      componentRef.instance.value = this.data.value;
      componentRef.instance.fromDialog = true;
      componentRef.instance.onOperationCompleted.subscribe((res: any) => {
        this.dialog.close(res);
      })
    }


  }

  handleAction(dialogAction: DialogActions){
    const val = dialogAction.action();
    val.subscribe(
      (res: any) => {
        console.log(res);

        alert('Operazione completata');

        if(dialogAction.closeDialog) {
          this.dialog.close(res);
        }
      },
      (err: any) => console.log(err)
    );
  }
}
