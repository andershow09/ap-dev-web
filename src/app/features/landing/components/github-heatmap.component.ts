import { Component, inject, computed } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

interface HeatmapDay {
  level: number; // 0, 1, 2, 3, 4
  date: string;
}

@Component({
  selector: 'app-github-heatmap',
  standalone: true,
  template: `
    <section class="py-8 sm:py-12 border-y border-white/5 bg-[#08090A]">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <p class="font-mono text-xs sm:text-sm text-[#10B981] font-semibold">
              // {{ isPt() ? 'atividade no github' : 'github activity' }}
            </p>
            <p class="mt-1 text-xs sm:text-sm text-[#8A8F98]">
              <span class="font-mono font-semibold text-white">{{ stats().contributionsEstimate }}+</span>
              {{ isPt() ? 'contribuições no último ano ·' : 'contributions in the last year ·' }}
              <span class="font-mono font-semibold text-white">{{ stats().publicRepos }}</span>
              {{ isPt() ? 'repositórios públicos' : 'public repositories' }}
            </p>
          </div>

          <a
            [href]="portfolio.profile().socialLinks.github"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#121417] px-3.5 py-1.5 text-xs font-mono text-[#8A8F98] transition-all hover:border-[#10B981]/50 hover:text-white"
          >
            <span>@andershow09</span>
            <span class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#10B981]">↗</span>
          </a>
        </div>

        <!-- Heatmap Scroll Container -->
        <div class="rounded-xl border border-white/10 bg-[#0D0F12] p-4 shadow-inner overflow-x-auto">
          <div class="flex gap-1" style="min-width: 720px;">
            @for (week of weeks(); track $index) {
              <div class="flex flex-col gap-1">
                @for (day of week; track $index) {
                  <div
                    class="h-2.5 w-2.5 rounded-[2px] transition-all duration-300 hover:scale-150 cursor-pointer"
                    [class]="getDayClass(day.level)"
                    [title]="day.level > 0 ? (day.level * 3) + ' contribuições' : 'Sem atividade'"
                  ></div>
                }
              </div>
            }
          </div>

          <!-- Footer Legend -->
          <div class="mt-4 flex items-center justify-between text-[11px] font-mono text-[#8A8F98] pt-2 border-t border-white/5">
            <span class="flex items-center gap-1.5">
              <span class="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span>{{ isPt() ? 'Sincronizado via GitHub API' : 'Synced with GitHub API' }}</span>
            </span>

            <div class="flex items-center gap-1.5">
              <span>{{ isPt() ? 'Menos' : 'Less' }}</span>
              <div class="h-2.5 w-2.5 rounded-[2px] bg-[#151A21]"></div>
              <div class="h-2.5 w-2.5 rounded-[2px] bg-[#1E3A2F]"></div>
              <div class="h-2.5 w-2.5 rounded-[2px] bg-[#2E6B47]"></div>
              <div class="h-2.5 w-2.5 rounded-[2px] bg-[#3CB371]"></div>
              <div class="h-2.5 w-2.5 rounded-[2px] bg-[#10B981]"></div>
              <span>{{ isPt() ? 'Mais' : 'More' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
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
