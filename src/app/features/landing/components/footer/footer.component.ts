import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { GlowButtonComponent } from '../../../../shared/components/glow-button/glow-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GlowButtonComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
