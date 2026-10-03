import { Component, input, inject } from '@angular/core';
import { ProjectItem } from '../../../../core/models/portfolio.model';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../../shared/components/tag-badge/tag-badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectItem>();
  readonly portfolio = inject(PortfolioService);
}
