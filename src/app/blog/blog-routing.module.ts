import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotFoundPageComponent } from '../global/not-found-page/not-found-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    //on ne met pas de /, car ça correspond à la racine
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path:'feed', // /blog/feed
    component: FeedPageComponent
  },
  {
    path: 'post/:id',
    component: PostPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
