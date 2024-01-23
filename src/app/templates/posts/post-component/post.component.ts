import { Component } from '@angular/core';
import { PostsService } from '../../../api/services/posts.service';
import { DataSharingBreadcrumbService } from '../../../api/services/data-sharing-breadcrumb.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostsComponent {
  constructor(private postsService: PostsService,  private dataSharingBreadcrumb: DataSharingBreadcrumbService) {
    this.dataSharingBreadcrumb.setDataBreadcrumb({
      name: ['posts'],
      link: '/posts'
    })
  }
  ngOnInit() {
    this.postsService.posts().subscribe((data) => {
    });
  }

}
