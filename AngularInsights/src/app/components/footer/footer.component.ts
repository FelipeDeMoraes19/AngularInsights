import { Component, inject } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [FormsModule, LoadingSpinnerComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = '';
  newsletterService = inject(NewsletterService);
  categories = ['Angular', 'TypeScript', 'Frontend', 'Carreira'];

  handleSubscribe() {
    if (this.email) {
      this.newsletterService.subscribe(this.email);
      this.email = '';
    }
  }
}
