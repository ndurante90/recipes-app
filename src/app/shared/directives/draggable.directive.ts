import { AfterViewInit, Directive, ElementRef, HostListener, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, Observable, fromEvent, switchMap } from 'rxjs';

@Directive({
  selector: '[appDraggable]'
})

export class DraggableDirective implements OnInit {


  constructor(private elementRef: ElementRef, private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    const dialogElement = this.dialogRef?._containerInstance?._config?.viewContainerRef?.element.nativeElement.parentNode.parentNode;
    dialogElement.style.position = 'fixed';
    dialogElement.style.top = '100px';
    dialogElement.style.left = '100px';
  }

  setDialogRef(dialogRef: any){
    this.dialogRef = dialogRef;
  }

  @HostListener('mousedown', ['$event'])
onMouseDown(event: MouseEvent) {
  const dialogElement = this.dialogRef?._containerInstance?._config?.viewContainerRef?.element.nativeElement.parentNode.parentNode;
  const startX = event.clientX;
  const startY = event.clientY;

  const initialTop = dialogElement.style.top ? parseInt(dialogElement.style.top, 10) : 0;
  const initialLeft = dialogElement.style.left ? parseInt(dialogElement.style.left, 10) : 0;

  const mouseMoveListener = (event: MouseEvent) => {
    const currentX = event.clientX;
    const currentY = event.clientY;

    const newTop = initialTop + (currentY - startY);
    const newLeft = initialLeft + (currentX - startX);

    dialogElement.style.top = `${newTop}px`;
    dialogElement.style.left = `${newLeft}px`;
  };

  const mouseUpListener = () => {
    window.removeEventListener('mousemove', mouseMoveListener);
    window.removeEventListener('mouseup', mouseUpListener);
  };

  window.addEventListener('mousemove', mouseMoveListener);
  window.addEventListener('mouseup', mouseUpListener);
}
}
