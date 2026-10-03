import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { GithubHeatmapComponent } from './components/github-heatmap/github-heatmap.component';
import { ProofStripComponent } from './components/proof-strip/proof-strip.component';
import { CapabilityTiersComponent } from './components/capability-tiers/capability-tiers.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CareerTimelineComponent } from './components/career-timeline/career-timeline.component';
import { EngineeringStandardsComponent } from './components/engineering-standards/engineering-standards.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    GithubHeatmapComponent,
    ProofStripComponent,
    CapabilityTiersComponent,
    ProjectCardComponent,
    CareerTimelineComponent,
    EngineeringStandardsComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
