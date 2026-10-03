import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-proof-strip',
  standalone: true,
  templateUrl: './proof-strip.component.html',
})
export class ProofStripComponent {
  readonly portfolio = inject(PortfolioService);
}
