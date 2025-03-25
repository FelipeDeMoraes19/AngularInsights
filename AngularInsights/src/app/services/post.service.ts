import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Dominando Componentes Angular',
      excerpt: 'Guia completo para criação de componentes reutilizáveis',
      content: `<p>Na construção de aplicações Angular robustas, o domínio de componentes é fundamental...</p>`,
      date: '2024-03-20',
      category: 'Angular',
      author: 'Felipe Developer',
      readTime: 8,
      coverImage: '/assets/images/post1.jpg'
    },
    {
      id: 2,
      title: 'TypeScript Avançado',
      excerpt: 'Padrões e técnicas profissionais',
      content: `<p>TypeScript traz segurança e produtividade para projetos em grande escala...</p>`,
      date: '2024-03-18',
      category: 'TypeScript',
      author: 'Felipe Developer',
      readTime: 6,
      coverImage: '/assets/images/post2.jpg'
    }
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
