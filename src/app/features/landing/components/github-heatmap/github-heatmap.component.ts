import { Component, inject, computed } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

interface HeatmapDay {
  level: number; // 0, 1, 2, 3, 4
  date: string;
}

@Component({
  selector: 'app-github-heatmap',
  standalone: true,
  templateUrl: './github-heatmap.component.html',
})
export class GithubHeatmapComponent {
  readonly portfolio = inject(PortfolioService);

  readonly stats = computed(() => this.portfolio.githubStats());

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }

  // Generate 52 weeks with 7 days each
  readonly weeks = computed<HeatmapDay[][]>(() => {
    const generated: HeatmapDay[][] = [];
    const seedWeights = [
      0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 0, 2, 0, 1, 4, 2, 0, 3, 1, 0,
      2, 4, 0, 1, 3, 0, 2, 0, 4, 1, 0, 3, 2, 0, 1, 0, 4, 2, 1, 0,
      3, 1, 0, 2, 4, 0, 1, 3, 0, 2, 1, 4
    ];

    for (let w = 0; w < 52; w++) {
      const week: HeatmapDay[] = [];
      const baseWeight = seedWeights[w % seedWeights.length];

      for (let d = 0; d < 7; d++) {
        // Weekends usually slightly lighter
        const isWeekend = d === 0 || d === 6;
        let level = 0;
        if (!isWeekend) {
          level = (baseWeight + (d % 3)) % 5;
        } else if (Math.random() > 0.6) {
          level = 1;
        }
        week.push({ level, date: `Day ${w * 7 + d}` });
      }
      generated.push(week);
    }
    return generated;
  });

  getDayClass(level: number): string {
    switch (level) {
      case 1:
        return 'bg-[#1E3A2F]';
      case 2:
        return 'bg-[#2E6B47]';
      case 3:
        return 'bg-[#3CB371]';
      case 4:
        return 'bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      default:
        return 'bg-[#151A21]';
    }
  }
}
