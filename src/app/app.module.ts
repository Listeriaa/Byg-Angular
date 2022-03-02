import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  //On met dans le tableau ce qui doit se lancer au lancement de l'application (=au bootstraping de l'application)
  bootstrap: [AppComponent]
})
export class AppModule { }
