import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { HeaderComponent } from './header.component';
import { PortfolioService } from '../../../core/services/portfolio.service';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let service: PortfolioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        PortfolioService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu open state', () => {
    expect(component.mobileOpen()).toBe(false);
    component.mobileOpen.set(true);
    fixture.detectChanges();
    expect(component.mobileOpen()).toBe(true);

    const compiled = fixture.nativeElement as HTMLElement;
    const mobileDropdown = compiled.querySelector('.md\\:hidden.mt-2');
    expect(mobileDropdown).toBeTruthy();
  });

  it('should toggle language via portfolio service', () => {
    expect(component.isPt()).toBe(true);
    service.toggleLanguage();
    fixture.detectChanges();
    expect(component.isPt()).toBe(false);
  });
});
