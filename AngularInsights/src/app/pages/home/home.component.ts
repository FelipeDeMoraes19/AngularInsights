import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../../shared/post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredPosts = inject(PostService).getFeaturedPosts();
}
