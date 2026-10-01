import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-engineering-standards',
  standalone: true,
  template: `
    <section class="py-16 sm:py-24 border-y border-white/5 bg-[#0D0F12]">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-12 text-left">
          <p class="font-mono text-xs sm:text-sm text-[#10B981] font-semibold">
            // {{ isPt() ? 'padrões de engenharia' : 'engineering standards' }}
          </p>
          <h2 class="mt-2 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#F7F8F8]">
            {{ isPt() ? 'Como Construo Software de Alta Confiabilidade' : 'How I Build Resilient Software' }}
          </h2>
        </div>

        <!-- 4 Grid Cards -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (std of portfolio.standards(); track std.id) {
            <div
              class="group rounded-xl border border-white/10 bg-[#121417] p-6 transition-all duration-300 hover:border-[#10B981]/40 hover:bg-[#181B20] text-left"
            >
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#10B981] mb-4 group-hover:scale-110 transition-transform">
                @switch (std.icon) {
                  @case ('layers') {
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  }
                  @case ('zap') {
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  @case ('shield') {
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  }
                  @case ('code') {
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }
                }
              </div>

              <h4 class="font-sans text-sm font-bold text-white group-hover:text-[#10B981] transition-colors">
                {{ portfolio.localize(std.title) }}
              </h4>

              <p class="mt-2 text-xs text-[#8A8F98] leading-relaxed">
                {{ portfolio.localize(std.description) }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class EngineeringStandardsComponent {
  readonly portfolio = inject(PortfolioService);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
