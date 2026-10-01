import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TerminalStreamService } from './terminal-stream.service';

import { vi } from 'vitest';

describe('TerminalStreamService', () => {
  let service: TerminalStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        TerminalStreamService,
      ],
    });

    service = TestBed.inject(TerminalStreamService);
  });

  afterEach(() => {
    service.ngOnDestroy();
  });

  it('should initialize with starting command line', () => {
    expect(service.lines().length).toBeGreaterThanOrEqual(1);
    expect(service.lines()[0].content).toContain('ap-dev-orchestrator');
  });

  it('should expose running status and tokens counter', () => {
    expect(service.activeStatus()).toBe('RUNNING');
    expect(service.currentTokens()).toBeGreaterThan(0);
  });

  it('should advance steps and add lines as time progresses', () => {
    vi.useFakeTimers();
    service.ngOnDestroy();
    service.startStreaming();
    const initialCount = service.lines().length;
    vi.advanceTimersByTime(2000);
    expect(service.lines().length).toBeGreaterThan(initialCount);
    vi.useRealTimers();
  });
});
