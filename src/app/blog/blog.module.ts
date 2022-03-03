import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ThemeModule } from '../theme/theme.module';


@NgModule({
  declarations: [
    FeedPageComponent,
    PostPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ThemeModule
  ]
})
export class BlogModule { }
