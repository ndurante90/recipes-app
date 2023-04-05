import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  class= "";
  toggleClass(){
    console.log('test');
    this.class = this.class == 'visible' ? '' : 'visible';
  }

}
