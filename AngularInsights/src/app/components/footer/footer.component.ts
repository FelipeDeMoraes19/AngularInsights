import { Component, inject } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = '';
  newsletterService = inject(NewsletterService);
  categories = ['Angular', 'TypeScript', 'Frontend', 'Carreira'];
}