import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';

@NgModule({

  //html syntax (composant, pipe, directive)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe
  ],

  //import de fonctionnalités (autres modules, qui font un export)
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //si on veut exporter des fonctionnalités vers d'autres modules
  exports: [

  ],
  //injection de dependances
  providers: [],

  //On met dans le tableau ce qui doit se lancer au lancement de l'application (=au bootstraping de l'application)
  //souvent ce qui est dans le index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
