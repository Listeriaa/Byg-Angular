import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThemeModule } from './theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/components/header/header.component';

@NgModule({

  //html syntax (composant, pipe, directive)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent
  ],

  //import de fonctionnalités (autres modules, qui font un export)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule

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
