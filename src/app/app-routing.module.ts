import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedPageComponent } from './global/get-started-page/get-started-page.component';
import { HomePageComponent } from './global/home-page/home-page.component';
import { NotFoundPageComponent } from './global/not-found-page/not-found-page.component';

const routes: Routes = [
  //va rediriger vers /home
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'get-started',
    component: GetStartedPageComponent
  },
  //chargement en lazy loading
  //pas d'import du BlogModule justement car en lazy loading, on le charge que quand on en a besoin
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
