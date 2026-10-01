import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { CareerTimelineComponent } from './career-timeline.component';
import { PortfolioService } from '../../../core/services/portfolio.service';

describe('CareerTimelineComponent', () => {
  let fixture: ComponentFixture<CareerTimelineComponent>;
  let component: CareerTimelineComponent;
  let service: PortfolioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerTimelineComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        PortfolioService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerTimelineComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });

  it('should create career timeline component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all timeline entries from service', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.group');
    expect(items.length).toBe(service.timeline().length);
  });

  it('should toggle language text properly', () => {
    expect(component.isPt()).toBe(true);
    service.setLanguage('en');
    fixture.detectChanges();
    expect(component.isPt()).toBe(false);
  });
});
