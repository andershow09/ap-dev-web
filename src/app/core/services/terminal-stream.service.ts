import { Injectable, signal, effect, OnDestroy } from '@angular/core';

export interface TerminalLine {
  prefix: string;
  content: string;
  type: 'command' | 'info' | 'tool' | 'workflow' | 'success';
}

@Injectable({
  providedIn: 'root',
})
export class TerminalStreamService implements OnDestroy {
  readonly lines = signal<TerminalLine[]>([]);
  readonly activeStatus = signal<string>('RUNNING');
  readonly currentTokens = signal<number>(4280);

  private intervalId: any = null;
  private step = 0;

  private readonly sequence: TerminalLine[] = [
    { prefix: '$', content: 'agent: ap-dev-orchestrator --mode=autonomous', type: 'command' },
    { prefix: '>', content: 'Loading context: memory window + project DAG...', type: 'info' },
    {
      prefix: '[MCP]',
      content: 'tool call: inspect_flutter_telemetry(cluster: "prod")',
      type: 'tool',
    },
    {
      prefix: '»',
      content: 'workflow: verify_fluid_ui_performance :: 60/120fps verified, zero jank',
      type: 'workflow',
    },
    {
      prefix: '✓',
      content: 'Architecture verified: Clean Architecture + BLoC synced',
      type: 'success',
    },
    {
      prefix: '$',
      content: 'agent: dispatch_event("stream_ready", target="client")',
      type: 'command',
    },
  ];

  constructor() {
    this.startStreaming();
  }

  startStreaming(): void {
    this.lines.set([this.sequence[0]]);
    this.step = 1;

    this.intervalId = setInterval(() => {
      if (this.step < this.sequence.length) {
        const next = this.sequence[this.step];
        this.lines.update((current) => [...current, next]);
        this.currentTokens.update((t) => t + Math.floor(Math.random() * 80 + 30));
        this.step++;
      } else {
        // Pause and reset cycle
        setTimeout(() => {
          this.lines.set([this.sequence[0]]);
          this.step = 1;
        }, 4000);
      }
    }, 1800);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
