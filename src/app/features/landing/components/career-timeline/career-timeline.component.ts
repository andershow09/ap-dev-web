import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../../shared/components/tag-badge/tag-badge.component';

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './career-timeline.component.html',
})
export class CareerTimelineComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
