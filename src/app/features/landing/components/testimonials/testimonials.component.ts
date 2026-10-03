import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
