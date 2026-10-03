import { Component, input, output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-glow-button',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './glow-button.component.html',
})
export class GlowButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly href = input<string | null>(null);
  readonly target = input<string>('_self');
  readonly label = input<string | null>(null);
  readonly clicked = output<void>();

  buttonClasses(): string {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none whitespace-nowrap min-h-[42px]';

    switch (this.variant()) {
      case 'primary':
        return `${base} bg-gradient-to-r from-[#5E6AD2] to-[#38BDF8] text-white font-semibold shadow-[0_0_20px_rgba(94,106,210,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:brightness-110 active:scale-95`;
      case 'secondary':
        return `${base} border border-[#22262E] bg-[#121417] text-[#F7F8F8] hover:border-[#38BDF8]/60 hover:bg-[#181B20] hover:text-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] active:scale-95`;
      case 'ghost':
        return `${base} text-[#8A8F98] hover:text-[#F7F8F8] hover:bg-white/5 active:scale-95`;
    }
  }
}
