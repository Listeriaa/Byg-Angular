import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byg-ng-formation';

  name = "Laetitia";

  today = new Date();

  imgUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  state = false;

  color ="blue";
  
  clickMethod(event: MouseEvent): void {
    console.log('evenement', event)
  }

  toggleState() : void {
    this.state = !this.state;
    console.log("state:", this.state);
  }
}
