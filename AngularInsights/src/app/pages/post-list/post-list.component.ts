import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../../shared/post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [PostCardComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts = inject(PostService).getPosts();
}
