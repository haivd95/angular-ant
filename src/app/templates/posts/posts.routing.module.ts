import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostsComponent } from './post-component/post.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
