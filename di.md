DI Concepts
La "Dependency Injection" est un "design pattern" qui consiste à séparer l'instanciation d'une dépendance et son utilisation.

Ce "design pattern" permet :
d'inverser les dépendances,
d'éviter le couplage fort avec les dépendances,
de factoriser l'instanciation d'une dépendance,
de faciliter le remplacement d'une dépendance par une autre implémentation à des fins fonctionnelles ou de "testing“.
Component ⇔ Service / Repository ⇔ HttpClient



DI et Services Angular

Avec Angular, une dépendance est généralement un service.
Un service est une classe permettant de factoriser certaines fonctionnalités ou d'accéder à un état permettant ainsi aux composants de communiquer entre eux. 
Les services sont le plus souvent des singletons. La portée/scope des services peut être géré de différentes façons dans Angular.

Un service est une classe qui doit être annotée @Injectable

```
@Injectable({
   prodiveIn: ‘root’
})
export class MyService {
...
}
 ```



Un service est injectée dans une classe depuis les paramètres de son constructeur

```
@Component({
    ...
})
export class PreviewComponent {


    // raccourci typescript
    // <portée> nom variable: type
    // ComponentInjector => ModuleInjector => RootInjector
    constructor(private httpClient: HttpClient, private mService: MyService) {
    }

    // notations
    myMethod(): void {
         this.httpClient
         this.mService
    }
}
```



Syntaxe issue des TypeScript Parameter Properties pour créer et initialiser automatiquement les attributs correspondants au constructeur.  




Utilisation des providers

Aujourd’hui l’utilisation des providers n’est pas l’approche la plus conseillée. (voir Utilisation du @Injectable)
```
@NgModule({
providers: [
{
provider: MyServiceI,
useClass: MyServiceImplA
}
]
})
export class MyModule {
}
```



Configuration de la propriété providers:
useValue
Utilisation d'une valeur "hardcoded" ou d’un objet
```
@NgModule({
providers: [
{
provide: API_BASE_URL,
useValue: 'http://....'
}
]
})
export class AppModule {
}

@NgModule({
providers: [
{
provider: MyService,
useValue: new MyService()
}
]
})
export class MyModule {
}
```



useFactory:
cette propriété permet de définir l'instanciation du service via une fonction.
```
@NgModule({
    providers: [
        {
            provider: IMyService,
            useFactory: () => {
                if (true) {
                    return new MyServiceImplA();
                }
                return new MyServiceImplB();
            }
        }
    ]
})
export class MyModule {
}
```

Injector Tree
Angular possède différents niveaux d’injection.

Root Injector
Tous les "providers" définis par les modules importés directement ou indirectement par l'AppModule sont injectés par le "root injector" et sont donc accessibles dans toute l'application.
Module 
Component Injector
Chaque composant dispose d'un "injector" et peut définir des "providers" via la propriété providers de sa configuration @Component. 
Ces "providers" vont écraser les "providers" parents (ceux des composants parents ou du "root injector") et définir de nouvelles instances des services associés pour chaque instance du composant.
Non recommandé sauf besoin spécifique (singleton, aspect stateless du service, etc.)

Garantir le lazy loading des services (eviter de charger un service plusieurs fois etc.)
Module.forRoot
Module.forChild
```
@NgModule({
})
export class MyModule{

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MyModule,
            providers: [
                MyService
            ]
        };
    }

}
```

=> pas le plus pratique => se référer au Tree-Shakable Services et la configuration via l’annotation @Injectable


Utilisation du @Injectable

Aujourd’hui l’utilisation des providers n’est pas l’approche la plus conseillée (depuis Angular 6).
L’annotation @Injectable permet de réaliser les mêmes opérations, mais de centraliser la configuration sur le service lui-même, évitant ainsi certaines erreurs (mauvaise configuration des providers, injection des dépendances avec lazy loading, etc.)

A la place des providers, on utilise provideIn qui permet de définir le provider directement sur le service
```
@Injectable({
    providedIn: 'root',
})
export class MyService{
}
```

providedIn: 'root' indique que le provider est ajouter au "root injector".

Il est également possible de sélectionner un module (providedIn: MyModule) pour que le service ne soit disponible que si le module associé est importé.

Il est ensuite possible de personnaliser l'instanciation avec useValue, useClass, useFactory etc...

Ressources:
https://stackoverflow.com/questions/50848357/what-is-the-purpose-of-providedin-with-the-injectable-decorator-when-generating
https://guide-angular.wishtack.io/angular/dependency-injection/injection-dun-service-angular
