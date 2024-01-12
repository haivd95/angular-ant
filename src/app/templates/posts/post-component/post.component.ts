import { Component } from '@angular/core';
import { PostsService } from '../../../api/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostsComponent {
  constructor(private postsService: PostsService) { }
  ngOnInit() {
    this.postsService.posts().subscribe((data) => {
      console.log('________data________', data);
    });
  }

}
