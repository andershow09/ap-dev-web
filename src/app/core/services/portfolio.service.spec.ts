import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        PortfolioService,
      ],
    });

    service = TestBed.inject(PortfolioService);
    httpMock = TestBed.inject(HttpTestingController);

    // Handle initial GitHub call
    const req = httpMock.expectOne('https://api.github.com/users/andershow09');
    req.flush({ public_repos: 30, followers: 20 });
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should initialize with Portuguese as default language', () => {
    expect(service.currentLanguage()).toBe('pt');
  });

  it('should toggle language from pt to en and back', () => {
    service.toggleLanguage();
    expect(service.currentLanguage()).toBe('en');

    service.toggleLanguage();
    expect(service.currentLanguage()).toBe('pt');
  });

  it('should set specific language correctly', () => {
    service.setLanguage('en');
    expect(service.currentLanguage()).toBe('en');

    service.setLanguage('pt');
    expect(service.currentLanguage()).toBe('pt');
  });

  it('should localize strings based on active language signal', () => {
    const localized = { pt: 'Olá Mundo', en: 'Hello World' };

    service.setLanguage('pt');
    expect(service.localize(localized)).toBe('Olá Mundo');

    service.setLanguage('en');
    expect(service.localize(localized)).toBe('Hello World');
  });

  it('should provide non-empty projects, capabilities and timeline', () => {
    expect(service.projects().length).toBeGreaterThan(0);
    expect(service.capabilities().length).toBe(3);
    expect(Array.isArray(service.testimonials())).toBe(true);
    expect(service.timeline().length).toBeGreaterThan(0);
  });

  it('should update githubStats from HTTP response', () => {
    expect(service.githubStats().publicRepos).toBe(30);
    expect(service.githubStats().followers).toBe(20);
  });
});
