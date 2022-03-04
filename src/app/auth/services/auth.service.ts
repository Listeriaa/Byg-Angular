import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  //injection tree shakeable : on dit où le service doit être injecté
  //root : niveau racine
  //platform : disponible au tout début (au bootstraping)
  //module
  //composant
  // le plus souvent on le met en root
  providedIn: 'root'
})
export class AuthService {

  random!: number;

  //c'est comme un observable avancé
  //on pourra l'utiliser dans d'autres composants pour s'abonner à ses évenements
  //Subject, ReplaySubject, 
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {

    this.random = Math.random()*100;
    console.log('init authService random', this.random);
   }
}
