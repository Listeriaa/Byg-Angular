import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.scss']
})
export class GetStartedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'byg-ng-formation';

  name = "Laetitia";

  today = new Date();

  imgUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  state = true;

  color ="blue";

  clickMethod(event: MouseEvent): void {
    console.log('evenement', event)
  }

  toggleState() : void {
    this.state = !this.state;
    console.log("state:", this.state);
  }
}
