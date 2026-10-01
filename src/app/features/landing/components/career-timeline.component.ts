import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../shared/components/tag-badge.component';

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  imports: [TagBadgeComponent],
  template: `
    <section id="trajetoria" class="py-20 sm:py-28 relative">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-14 text-left">
          <p class="font-mono text-xs sm:text-sm text-[#38BDF8] font-semibold">
            // {{ isPt() ? 'trajetória profissional' : 'career trajectory' }}
          </p>
          <h2 class="mt-2 font-sans text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F8F8]">
            {{ isPt() ? '+10 Anos de Evolução Contínua' : '10+ Years of Continuous Engineering' }}
          </h2>
          <p class="mt-3 max-w-xl text-sm sm:text-base text-[#8A8F98]">
            {{
              isPt()
                ? 'Histórico sólido construindo produtos digitais corporativos de alto impacto e liderança técnica.'
                : 'Proven track record delivering mission-critical enterprise software and technical leadership.'
            }}
          </p>
        </div>

        <!-- Vertical Continuous Timeline -->
        <div class="relative ml-2 sm:ml-4 border-l border-white/10 pl-6 sm:pl-10 space-y-12 text-left">
          @for (item of portfolio.timeline(); track item.company; let idx = $index) {
            <div class="relative group">
              <!-- Glowing Milestone Dot on Line -->
              <div
                class="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#121417] bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.8)] group-hover:scale-125 transition-transform"
              >
                <div class="h-1.5 w-1.5 rounded-full bg-white"></div>
              </div>

              <!-- Content Box -->
              <div
                class="rounded-xl border border-white/5 bg-[#121417]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-[#181B20]"
              >
                <!-- Top Row: Period & Role -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <span class="font-mono text-xs text-[#38BDF8] font-semibold">
                    // {{ item.period }}
                  </span>
                  @if (item.client) {
                    <span class="text-[11px] font-mono text-[#10B981] bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 w-fit">
                      {{ item.client }}
                    </span>
                  }
                </div>

                <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {{ portfolio.localize(item.role) }}
                </h3>

                <p class="text-xs font-semibold text-[#8A8F98] mt-0.5">
                  {{ item.company }}
                </p>

                <p class="mt-3 text-xs sm:text-sm leading-relaxed text-[#D5DAE4]/80">
                  {{ portfolio.localize(item.description) }}
                </p>

                <!-- Tags -->
                @if (item.tags && item.tags.length > 0) {
                  <div class="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    @for (t of item.tags; track t) {
                      <app-tag-badge [label]="t" />
                    }
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class CareerTimelineComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
