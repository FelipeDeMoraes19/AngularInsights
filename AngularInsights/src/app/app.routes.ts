import { Routes } from '@angular/router';

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
    title: 'Detalhes do Artigo'
  }
];