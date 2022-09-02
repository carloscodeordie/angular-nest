import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-or-die-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor() {
    this.title = 'Default Title';
  }

  @Input() title: string;
}
