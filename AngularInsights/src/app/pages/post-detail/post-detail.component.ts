import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);
  post = inject(PostService).getPost(
    Number(this.route.snapshot.params['id'])
  );
}