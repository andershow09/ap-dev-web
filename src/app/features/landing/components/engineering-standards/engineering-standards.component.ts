import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-engineering-standards',
  standalone: true,
  templateUrl: './engineering-standards.component.html',
})
export class EngineeringStandardsComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
