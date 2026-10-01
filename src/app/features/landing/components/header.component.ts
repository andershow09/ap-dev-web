import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-8">
      <nav
        class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#08090A]/80 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5E6AD2] to-[#38BDF8] text-xs font-mono font-bold text-white shadow-[0_0_15px_rgba(94,106,210,0.4)] group-hover:scale-105 transition-transform"
          >
            AP
          </div>
          <span class="font-sans text-sm font-semibold tracking-tight text-[#F7F8F8]">
            AP<span class="text-[#38BDF8]">.dev</span>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-6 text-xs font-medium text-[#8A8F98]">
          <li>
            <a href="#especialidades" class="transition-colors hover:text-[#38BDF8]">
              {{ isPt() ? 'Especialidades' : 'Capabilities' }}
            </a>
          </li>
          <li>
            <a href="#projetos" class="transition-colors hover:text-[#38BDF8]">
              {{ isPt() ? 'Projetos' : 'Projects' }}
            </a>
          </li>
          <li>
            <a href="#trajetoria" class="transition-colors hover:text-[#38BDF8]">
              {{ isPt() ? 'Trajetória' : 'Career' }}
            </a>
          </li>
        </ul>

        <!-- Right Side: Status + Language Toggle + Action -->
        <div class="flex items-center gap-3">
          <!-- Availability Badge -->
          <div
            class="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-400 backdrop-blur-sm"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>{{ isPt() ? 'Disponível' : 'Available' }}</span>
          </div>

          <!-- Language Switcher (PT / EN) -->
          <button
            type="button"
            (click)="portfolio.toggleLanguage()"
            class="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono font-medium text-[#8A8F98] transition-colors hover:border-[#38BDF8]/40 hover:text-white"
            title="Alternar Idioma / Switch Language"
          >
            <span [class.text-[#38BDF8]]="isPt()" [class.font-bold]="isPt()">PT</span>
            <span class="opacity-40">/</span>
            <span [class.text-[#38BDF8]]="!isPt()" [class.font-bold]="!isPt()">EN</span>
          </button>

          <!-- Contact CTA -->
          <a
            href="#contato"
            class="hidden sm:inline-flex items-center justify-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-medium text-[#38BDF8] transition-all duration-300 hover:border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#08090A] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
          >
            {{ isPt() ? 'Falar Comigo' : "Let's Talk" }}
          </a>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            (click)="mobileOpen.update(v => !v)"
            class="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white"
            aria-label="Abrir menu"
          >
            @if (mobileOpen()) {
              ✕
            } @else {
              ☰
            }
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown -->
      @if (mobileOpen()) {
        <div
          class="md:hidden mt-2 mx-auto max-w-sm rounded-2xl border border-white/10 bg-[#08090A]/95 p-4 shadow-2xl backdrop-blur-2xl"
        >
          <ul class="flex flex-col gap-3 text-sm font-medium text-[#8A8F98]">
            <li>
              <a
                href="#especialidades"
                (click)="mobileOpen.set(false)"
                class="block py-1 hover:text-[#38BDF8]"
              >
                {{ isPt() ? 'Especialidades' : 'Capabilities' }}
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                (click)="mobileOpen.set(false)"
                class="block py-1 hover:text-[#38BDF8]"
              >
                {{ isPt() ? 'Projetos' : 'Projects' }}
              </a>
            </li>
            <li>
              <a
                href="#trajetoria"
                (click)="mobileOpen.set(false)"
                class="block py-1 hover:text-[#38BDF8]"
              >
                {{ isPt() ? 'Trajetória' : 'Career' }}
              </a>
            </li>
            <li class="pt-2 border-t border-white/10">
              <a
                href="#contato"
                (click)="mobileOpen.set(false)"
                class="block text-center py-2 rounded-lg bg-[#38BDF8] text-[#08090A] font-semibold"
              >
                {{ isPt() ? 'Falar Comigo' : "Let's Talk" }}
              </a>
            </li>
          </ul>
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  readonly portfolio = inject(PortfolioService);
  readonly mobileOpen = signal(false);

  isPt(): boolean {
    return this.portfolio.currentLanguage() === 'pt';
  }
}
