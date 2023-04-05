import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number | undefined;

  @Input() clickable: boolean = false;

  @Output() onStarClick: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {

  }

  setValue(value: number){
     if(this.clickable){
        this.rating = value;
        this.onStarClick.emit(value);
     }
  }
}


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ StarRatingComponent ],
  exports:      [ StarRatingComponent ]
 })

 export class StarRatingComponentModule { }
