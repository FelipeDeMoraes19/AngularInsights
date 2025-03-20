import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Dominando Componentes Angular',
      excerpt: 'Guia completo para criação de componentes reutilizáveis',
      content: '...',
      date: '2024-03-20',
      category: 'Angular',
      author: 'Felipe Developer',
      readTime: 8,
      coverImage: '/assets/images/post1.jpg'
    },
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  getFeaturedPosts(): Post[] {
    return this.posts.slice(0, 3);
  }
}