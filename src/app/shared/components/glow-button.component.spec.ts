import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { GlowButtonComponent } from './glow-button.component';

describe('GlowButtonComponent', () => {
  let fixture: ComponentFixture<GlowButtonComponent>;
  let component: GlowButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowButtonComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(GlowButtonComponent);
    component = fixture.componentInstance;
  });

  it('should render a button when href is not provided', () => {
    fixture.componentRef.setInput('label', 'Click Me');
    fixture.detectChanges();

    const btn = fixture.nativeElement.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toContain('Click Me');
  });

  it('should render an anchor link when href is provided', () => {
    fixture.componentRef.setInput('href', 'https://example.com');
    fixture.componentRef.setInput('label', 'Visit');
    fixture.componentRef.setInput('target', '_blank');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor.getAttribute('href')).toBe('https://example.com');
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.textContent).toContain('Visit');
  });

  it('should emit clicked event on button click', () => {
    let clicked = false;
    component.clicked.subscribe(() => {
      clicked = true;
    });

    fixture.componentRef.setInput('label', 'Action');
    fixture.detectChanges();

    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    expect(clicked).toBe(true);
  });

  it('should apply secondary and ghost variants properly', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    expect(component.buttonClasses()).toContain('bg-[#121417]');

    fixture.componentRef.setInput('variant', 'ghost');
    fixture.detectChanges();
    expect(component.buttonClasses()).toContain('text-[#8A8F98]');
  });
});
