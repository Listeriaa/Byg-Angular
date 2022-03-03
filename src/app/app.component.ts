import { Component, EventEmitter } from '@angular/core';


//si on fait un composant monofichier, il faut enlever url de template et style et mettre directement le html et le style là
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
