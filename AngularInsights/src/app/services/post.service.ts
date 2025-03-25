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
      coverImage: '/assets/images/angular-icon.svg'
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
      coverImage: '/assets/images/typescript-2.svg'
    },
    {
      id: 3,
      title: 'Melhores Práticas de Estrutura de Pastas em Angular',
      excerpt: 'Organize seu projeto de forma escalável e mantenível...',
      content: `<p>Uma boa organização de pastas faz toda a diferença em projetos de médio e grande porte. Com uma estrutura clara, você facilita a manutenção e encontra facilmente módulos, componentes e serviços. Confira algumas sugestões de como categorizar seu projeto!</p>`,
      date: '2024-03-25',
      category: 'Angular',
      author: 'Felipe Developer',
      readTime: 7,
      coverImage: '/assets/images/AngularImagem.jpg'
    },
    {
      id: 4,
      title: 'RxJS e Programação Reativa',
      excerpt: 'Aprenda a criar streams de dados com Observables e Operators',
      content: `<p>RxJS é uma biblioteca poderosa para lidar com fluxos assíncronos no Angular. Dominar operators como map, filter e switchMap permite criar arquiteturas robustas e flexíveis. Neste artigo, exploramos os conceitos-chave e exemplos práticos de como integrar RxJS ao seu dia a dia de desenvolvimento.</p>`,
      date: '2024-03-22',
      category: 'Angular',
      author: 'Felipe Developer',
      readTime: 5,
      coverImage: '/assets/images/RxJS.png'
    },
    {
      id: 5,
      title: 'Carreira em Frontend',
      excerpt: 'Dicas para evoluir como desenvolvedor web e se destacar no mercado',
      content: `<p>A área de Frontend está em alta, mas exige constante estudo e atualização. Nesta série de dicas, abordamos tópicos como boas práticas, ferramentas, soft skills e networking para ajudá-lo a dar um salto na carreira como desenvolvedor web.</p>`,
      date: '2024-03-28',
      category: 'Carreira',
      author: 'Felipe Developer',
      readTime: 4,
      coverImage: '/assets/images/desenvolvedor-front-end.jpg'
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
