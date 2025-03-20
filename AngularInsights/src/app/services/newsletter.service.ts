import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, of, Subject, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsletterService {
  private apiUrl = 'https://api.angularinsights.com/newsletter';
  private storageKey = 'newsletter_subscriptions';
  
  private loadingSubject = new Subject<boolean>();
  private messageSubject = new Subject<string>();

  loading$ = this.loadingSubject.asObservable();
  messages$ = this.messageSubject.asObservable();

  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    if (!this.validateEmail(email)) {
      this.messageSubject.next('Por favor, insira um e-mail válido');
      return;
    }

    if (this.isAlreadySubscribed(email)) {
      this.messageSubject.next('Este e-mail já está inscrito');
      return;
    }

    this.loadingSubject.next(true);

    of({ success: true }).pipe(
      delay(1500),
      tap(() => {
        this.saveSubscription(email);
        this.messageSubject.next('Inscrição realizada com sucesso!');
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageSubject.next('Erro na inscrição. Tente novamente mais tarde.');
        return throwError(() => error);
      }),
      tap(() => this.loadingSubject.next(false))
    ).subscribe();
  }

  private validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  private isAlreadySubscribed(email: string): boolean {
    const subscriptions = this.getSubscriptions();
    return subscriptions.includes(email.toLowerCase());
  }

  private saveSubscription(email: string): void {
    const subscriptions = this.getSubscriptions();
    subscriptions.push(email.toLowerCase());
    localStorage.setItem(this.storageKey, JSON.stringify(subscriptions));
  }

  getSubscriptions(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}