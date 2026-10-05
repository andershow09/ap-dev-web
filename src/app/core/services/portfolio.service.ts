import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import {
  Language,
  LocalizedString,
  PortfolioData,
  Profile,
  MetricItem,
  CapabilityTier,
  ProjectItem,
  TestimonialItem,
  TimelineMilestone,
  EngineeringStandard,
} from '../models/portfolio.model';
import { catchError, of } from 'rxjs';

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  contributionsEstimate: number;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly http = inject(HttpClient);

  // Reative state for Language (Single Source of Truth)
  readonly currentLanguage = signal<Language>('pt');

  // Raw data signal
  readonly data = signal<PortfolioData>(PORTFOLIO_DATA);

  // Live GitHub stats signal
  readonly githubStats = signal<GitHubStats>({
    publicRepos: 28,
    followers: 18,
    contributionsEstimate: 412,
  });

  constructor() {
    this.fetchGitHubData();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  toggleLanguage(): void {
    this.currentLanguage.update((curr) => (curr === 'pt' ? 'en' : 'pt'));
  }

  // Helper to extract localized text based on current language
  localize(str: LocalizedString): string {
    const lang = this.currentLanguage();
    return str[lang] || str.pt;
  }

  // Computed signals for components
  readonly profile = computed(() => this.data().profile);
  readonly metrics = computed(() => this.data().metrics);
  readonly capabilities = computed(() => this.data().capabilities);
  readonly projects = computed(() => this.data().projects);
  readonly testimonials = computed(() => this.data().testimonials);
  readonly timeline = computed(() => this.data().timeline);
  readonly standards = computed(() => this.data().standards);

  private fetchGitHubData(): void {
    this.http
      .get<{ public_repos?: number; followers?: number }>(
        'https://api.github.com/users/andershow09',
      )
      .pipe(
        catchError(() =>
          of({
            public_repos: 32,
            followers: 24,
          }),
        ),
      )
      .subscribe((res) => {
        if (res && res.public_repos !== undefined) {
          this.githubStats.update((prev) => ({
            ...prev,
            publicRepos: res.public_repos ?? prev.publicRepos,
            followers: res.followers ?? prev.followers,
          }));
        }
      });
  }
}
