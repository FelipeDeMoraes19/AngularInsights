import { Routes } from '@angular/router';
import { PostService } from './services/post.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Angular Insights - Home'
  },
  { 
    path: 'posts', 
    loadComponent: () => import('./pages/post-list/post-list.component').then(m => m.PostListComponent),
    title: 'Todos os Artigos'
  },
  { 
    path: 'posts/:id', 
    loadComponent: () => import('./pages/post-detail/post-detail.component').then(m => m.PostDetailComponent),
    title: (data) => {
      const post = inject(PostService).getPost(Number(data.params['id']));
      return post?.title || 'Artigo não encontrado';
    }
  },
  { 
    path: 'sobre', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Sobre o Angular Insights'
  },
  { 
    path: '**', 
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Página não encontrada'
  }
];
