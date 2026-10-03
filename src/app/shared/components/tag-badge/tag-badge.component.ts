import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-badge',
  standalone: true,
  templateUrl: './tag-badge.component.html',
})
export class TagBadgeComponent {
  readonly label = input.required<string>();
}
