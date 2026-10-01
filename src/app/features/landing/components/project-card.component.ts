import { Component, input, inject } from '@angular/core';
import { ProjectItem } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { TagBadgeComponent } from '../../../shared/components/tag-badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagBadgeComponent],
  template: `
    <div
      class="group relative flex flex-col h-full w-full transition-transform duration-500 ease-out hover:-translate-y-2 text-left"
    >
      <!-- Top Folder Tab -->
      <div class="flex items-end">
        <div
          class="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-t-xl border-t-2 border-x-2 -mb-0.5 transition-colors duration-500 bg-white/[0.04] border-white/10"
          [class.group-hover:border-[#38BDF8]]="project().categoryType === 'mobile'"
          [class.group-hover:border-[#5E6AD2]]="project().categoryType === 'ai'"
          [class.group-hover:border-[#10B981]]="project().categoryType === 'web'"
        >
          <svg class="h-3.5 w-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span
            class="text-[10px] font-mono font-bold tracking-wider uppercase"
            [style.color]="project().accentColor"
          >
            {{ project().category }}
          </span>
        </div>
      </div>

      <!-- Main Folder Body -->
      <div
        class="relative z-0 flex flex-col justify-between flex-1 rounded-b-2xl rounded-tr-2xl rounded-tl-none border-2 bg-[#121417] p-6 transition-all duration-500 border-white/10"
        [class.group-hover:border-[#38BDF8]]="project().categoryType === 'mobile'"
        [class.group-hover:border-[#5E6AD2]]="project().categoryType === 'ai'"
        [class.group-hover:border-[#10B981]]="project().categoryType === 'web'"
        [class.group-hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.2)]]="project().categoryType === 'mobile'"
        [class.group-hover:shadow-[0_20px_40px_-15px_rgba(94,106,210,0.2)]]="project().categoryType === 'ai'"
        [class.group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]]="project().categoryType === 'web'"
      >
        <!-- Subtle internal glow hover overlay -->
        <div
          class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-b-2xl rounded-tr-2xl"
          [style.background-color]="project().accentColor"
        ></div>

        <div class="relative z-10 flex flex-col flex-1">
          <!-- Top Tag Badge -->
          <div class="mb-4 flex items-center justify-between gap-2">
            <span
              class="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wide text-white/80 backdrop-blur-sm"
            >
              {{ portfolio.localize(project().badge) }}
            </span>

            @if (project().liveUrl) {
              <a
                [href]="project().liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                @if (project().liveUrl?.includes('play.google.com')) {
                  <span>Google Play</span>
                } @else {
                  <span>Live App</span>
                }
                <span>↗</span>
              </a>
            } @else if (project().githubUrl) {
              <a
                [href]="project().githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-mono text-[#38BDF8] hover:underline flex items-center gap-1"
              >
                <span>Código</span>
                <span>↗</span>
              </a>
            }
          </div>

          <!-- App Banner (if present) -->
          @if (project().bannerImage) {
            <div class="mb-4 relative overflow-hidden rounded-xl border border-white/10 h-28 sm:h-32 w-full bg-[#08090A]">
              <img
                [src]="project().bannerImage"
                [alt]="project().title"
                loading="lazy"
                class="w-full h-full object-cover object-center opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent pointer-events-none"></div>
            </div>
          }

          <!-- Project Title -->
          <h3 class="font-sans text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
            {{ project().title }}
          </h3>

          <!-- Project Summary -->
          <p class="mt-2.5 text-xs sm:text-sm text-[#8A8F98] leading-relaxed">
            {{ portfolio.localize(project().summary) }}
          </p>

          <!-- Highlights Checklist (Challenge, Solution, Impact) -->
          <ul class="mt-5 flex flex-col gap-2.5">
            @for (item of project().highlights; track $index) {
              <li class="flex items-start gap-2.5 text-xs text-[#D5DAE4] leading-snug">
                <svg
                  class="h-4 w-4 shrink-0 mt-0.5 stroke-[2.5]"
                  [style.color]="project().accentColor"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ portfolio.localize(item) }}</span>
              </li>
            }
          </ul>

          <!-- App Screenshots Showcase (if present) -->
          @if (project().screenshots?.length) {
            <div class="mt-6 pt-4 border-t border-white/5">
              <span class="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-semibold mb-2.5 flex items-center gap-1.5">
                <span>📱</span>
                <span>{{ portfolio.currentLanguage() === 'pt' ? 'Telas do Aplicativo:' : 'Production App Screens:' }}</span>
              </span>
              <div class="flex items-center gap-3 overflow-x-auto pb-2">
                @for (shot of project().screenshots; track shot) {
                  <div class="shrink-0 relative group/img overflow-hidden rounded-xl border border-white/10 bg-[#08090A] shadow-md hover:border-[#38BDF8]/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                    <img
                      [src]="shot"
                      [alt]="project().title + ' preview'"
                      loading="lazy"
                      class="h-32 sm:h-36 w-auto object-cover rounded-xl transition-transform duration-300 group-hover/img:scale-105"
                    />
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <!-- Tech Chips Footer -->
        <div class="relative z-10 pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2">
          @for (tag of project().tags; track tag) {
            <app-tag-badge [label]="tag" />
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectItem>();
  readonly portfolio = inject(PortfolioService);
}
