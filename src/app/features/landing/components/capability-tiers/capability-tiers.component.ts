import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../../shared/components/tag-badge/tag-badge.component';

@Component({
  selector: 'app-capability-tiers',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './capability-tiers.component.html',
})
export class CapabilityTiersComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
