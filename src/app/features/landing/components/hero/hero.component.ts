import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { TerminalStreamService } from '../../../../core/services/terminal-stream.service';
import { GlowButtonComponent } from '../../../../shared/components/glow-button/glow-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GlowButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly portfolio = inject(PortfolioService);
  readonly terminal = inject(TerminalStreamService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }

  headline(): string {
    return this.portfolio.localize(this.portfolio.profile().headline);
  }

  subheadline(): string {
    return this.portfolio.localize(this.portfolio.profile().subheadline);
  }
}
