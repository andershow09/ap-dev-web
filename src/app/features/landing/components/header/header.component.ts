import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly portfolio = inject(PortfolioService);
  readonly mobileOpen = signal(false);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
