# Lazy loading

Le lazy loading de modules est une fonctionnalité d'Angular permettant de charger du code applicatif lorsque celui-ci sera sollicité, plutôt que de charger toute l'application dès son démarrage. Angular va découper l'application en plusieurs fichiers (bundles / chunk) à la compilation via la cli et WebPack.


Grâce au lazy loading on va pouvoir proposer un affichage de l'application beaucoup plus rapidement en ne chargeant que les parties nécessaires, et en déférant le chargement des autres parties.


Angular propose plusieurs stratégies de lazy loading. Elles nécessitent d’utiliser les modules. Ce sont les modules angular qui sont lazy-load. La plupart des mécanismes se basent sur le routing. On peut aussi retrouver des syntaxes ou stratégies qui permettent de charger des modules depuis certaines classes ou sur certaines actions précises. 


## Chargement à la demande via le routing

Par défaut, un module lazy loadé sera chargé lorsque sa route sera appelée.

```
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];
```


Dans l'exemple précédent, le module ItemsModule est lié à la route items. Une fois que l'utilisateur naviguera vers cette route, Angular chargera le chunk du module correspondant.
Cette stratégie permet de différer au maximum le chargement d'un module mais a pour conséquence de provoquer une légère latence lors de la navigation, puisqu'Angular devra attendre la fin du chargement du chunk avant de pouvoir instancier le composant ciblé. Pour éviter les latences, nous pouvons précharger les modules.

## Aller plus loin Preloading
Angular permet également de précharger tous les modules (configurés en lazy-load) via la classe PreloadAllModules. Cette stratégie permet de charger tous les modules sans attendre qu'ils soient visités. Pour l'utiliser, il suffit de fournir la classe PreloadAllModules en paramètre de la méthode forRoot du module RouterModule :

```
RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: PreloadAllModules
  }
)
```

Dans un premier temps Angular va charger uniquement la partie nécessaire au démarrage de l'application, puis les autres modules seront chargés en background. On gagne donc en performance au premier affichage et on élimine les latences de navigations éventuelles dues au chargement d’autres modules.
Le côté négatif est que l'on va beaucoup solliciter le réseau au démarrage de l'application, ce qui pourrait entraîner des problématiques en fonction du contexte.


## Preloading Custom Strategies
Il est possible de définir des stratégies de preloading plus précises.
Par exemple charger uniquement certains modules taggés/configurés pour être préloadés.
Pour utiliser une strategy de preloading il faut implémenter l’interface PreloadingStrategy.

- Définition de la Strategy

```
export class PreloadTaggedModuleStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data['preload'] ? load() : of(null);
    }
}
```

- Déclaration de la strategy (attention, il faut également le mettre dans le provider de app.module)

```
RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: PreloadTaggedModuleStrategy 
  }
)
```

- Marquer le module en preloading

```
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
    data: { preload: true }
  }
];
```

Une stratégie citée  => ngx-quicklink
(https://web.dev/route-preloading-in-angular/)
