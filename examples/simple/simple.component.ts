import { Component, EventEmitter, Output } from '@angular/core';
import { ActiveOutput } from '@ngx-output';


@Component({
  selector: 'app',
  template: `
    <my-button>You can't click me...</my-button>
    <my-button (click)="onClick()">Click me!</my-button>
  `
})
export class AppComponent {
  onClick(): void {
    console.log('A button has been clicked!');
  }
}

@Component({
  selector: 'my-button',
  template: `
    <button [disabled]="!clickable">
     <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Output() click = new EventEmitter<void>();
  @ActiveOutput('click') clickable: boolean;
}