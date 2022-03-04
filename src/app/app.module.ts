import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule, PreloadOfflineModuleStrategy } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/components/header/header.component';
import { HomePageComponent } from './global/home-page/home-page.component';
import { GetStartedPageComponent } from './global/get-started-page/get-started-page.component';
import { NotFoundPageComponent } from './global/not-found-page/not-found-page.component';
import { SharedModule } from './utils/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './utils/interceptors/http-error.interceptor';

@NgModule({

  //html syntax (composant, pipe, directive)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    HomePageComponent,
    GetStartedPageComponent,
    NotFoundPageComponent
  ],

  //import de fonctionnalités (autres modules, qui font un export)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule

  ],
  //si on veut exporter des fonctionnalités vers d'autres modules
  exports: [

  ],
  //injection de dependances
  providers: [PreloadOfflineModuleStrategy, {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}],

  //On met dans le tableau ce qui doit se lancer au lancement de l'application (=au bootstraping de l'application)
  //souvent ce qui est dans le index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
