# ngx-output
**ngx-output** is a collection of utility decorators for Angular `@Output` bindings.

## ActiveOutput
Detect if a `@Output` is currently active or not to adapt the behavior of your component.

```ts
@Component({
  selector: 'my-button',
  template: `
    <!-- If the component output is not active, it means the button shouldn't be clickable. -->
    <button [disabled]="!clickable">
     <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Output() click = new EventEmitter<void>();
  @ActiveOutput('click') clickable: boolean;
}
```