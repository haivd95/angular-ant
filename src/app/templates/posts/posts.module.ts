import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule, routes } from './posts.routing.module';
import { PostsComponent } from './post-component/post.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ],
  providers: []
})
export class PostsModule {
  static routerMapComponent = routes;
}
