import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post;
}
