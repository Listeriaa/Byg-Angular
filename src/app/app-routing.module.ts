import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetStartedPageComponent } from './global/get-started-page/get-started-page.component';
import { HomePageComponent } from './global/home-page/home-page.component';
import { NotFoundPageComponent } from './global/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'get-started', component: GetStartedPageComponent},
  {path: 'blog', data: ['offline'], loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: NotFoundPageComponent},
];

export class PreloadOfflineModuleStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data['offline'] ? load() : of(null);
    }
}

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadOfflineModuleStrategy  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
