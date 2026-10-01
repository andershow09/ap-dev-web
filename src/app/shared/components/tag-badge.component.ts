import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-badge',
  standalone: true,
  template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#121417]/80 px-2.5 py-1 text-xs font-mono text-[#8A8F98] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-[#F7F8F8] hover:bg-[#181B20]"
    >
      <span class="text-accent text-[11px] opacity-70">$</span>
      <span>{{ label() }}</span>
    </span>
  `,
})
export class TagBadgeComponent {
  readonly label = input.required<string>();
}
