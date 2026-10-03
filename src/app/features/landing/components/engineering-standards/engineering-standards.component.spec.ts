import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { EngineeringStandardsComponent } from './engineering-standards.component';
import { PortfolioService } from '../../../../core/services/portfolio.service';

describe('EngineeringStandardsComponent', () => {
  let fixture: ComponentFixture<EngineeringStandardsComponent>;
  let component: EngineeringStandardsComponent;
  let service: PortfolioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringStandardsComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        PortfolioService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineeringStandardsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });

  it('should create engineering standards component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all engineering standards cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.group');
    expect(cards.length).toBe(service.standards().length);
  });

  it('should toggle language text properly', () => {
    expect(component.isPt()).toBe(true);
    service.setLanguage('en');
    fixture.detectChanges();
    expect(component.isPt()).toBe(false);
  });
});
