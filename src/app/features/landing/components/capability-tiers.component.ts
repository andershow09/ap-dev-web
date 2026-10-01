import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../shared/components/tag-badge.component';

@Component({
  selector: 'app-capability-tiers',
  standalone: true,
  imports: [TagBadgeComponent],
  template: `
    <section id="especialidades" class="py-20 sm:py-28 relative">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-14 text-left">
          <p class="font-mono text-xs sm:text-sm text-[#38BDF8] font-semibold">
            // {{ isPt() ? 'especialidades técnicas' : 'core capability tiers' }}
          </p>
          <h2 class="mt-2 font-sans text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F8F8]">
            {{ isPt() ? 'Três Pilares de Engenharia de Ponta' : 'Three Pillars of Engineering Excellence' }}
          </h2>
          <p class="mt-3 max-w-2xl text-sm sm:text-base text-[#8A8F98]">
            {{
              isPt()
                ? 'Da criação de aplicativos móveis à orquestração de agentes autônomos e arquiteturas cloud corporativas.'
                : 'From enterprise mobile apps to autonomous agent orchestration and resilient cloud architectures.'
            }}
          </p>
        </div>

        <!-- 3 Columns -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          @for (tier of portfolio.capabilities(); track tier.id) {
            <div
              class="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121417]/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-[#181B20] hover:shadow-2xl"
              [style.--tier-accent]="tier.accentColor"
            >
              <!-- Card Top -->
              <div>
                <div class="flex items-center justify-between mb-6">
                  <!-- Icon Box -->
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all group-hover:scale-110 group-hover:border-white/30"
                  >
                    @switch (tier.icon) {
                      @case ('smartphone') {
                        <svg class="h-6 w-6 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" stroke-width="2" />
                          <path d="M12 18h.01" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      }
                      @case ('brain') {
                        <svg class="h-6 w-6 text-[#5E6AD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
                        </svg>
                      }
                      @case ('globe') {
                        <svg class="h-6 w-6 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke-width="2" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                        </svg>
                      }
                    }
                  </div>

                  <span class="font-mono text-sm text-[#8A8F98] group-hover:text-white transition-colors">
                    {{ tier.number }}
                  </span>
                </div>

                <h3 class="font-sans text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {{ portfolio.localize(tier.title) }}
                </h3>

                <p class="mt-3 text-sm leading-relaxed text-[#8A8F98]">
                  {{ portfolio.localize(tier.description) }}
                </p>
              </div>

              <!-- Tags Shelf -->
              <div class="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                @for (tag of tier.tags; track tag) {
                  <app-tag-badge [label]="tag" />
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class CapabilityTiersComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
