/**
 * `ActiveOutput` is a decorator that observes an `@Output` property and detects if it's currently active or not.
 *
 * @example
 *
 * @Component({
 * selector: 'my-button',
 * template: `
 *   <button [disabled]="!clickable">
 *    <ng-content></ng-content>
 *   </button>
 * `
 * })
 * export class ButtonComponent {
 *   @Output() click = new EventEmitter<void>();
 *   @ActiveOutput('click') clickable: boolean;
 * }
 *
 * @param outputName Name of the output's property.
 */
export function ActiveOutput(outputName: string): PropertyDecorator {
  return (target: any, key: PropertyKey): void => {
    Object.defineProperty(target, key, {
      get(): boolean {
        const output = this[outputName];
        if (!output || !output.observers) {
          return false;
        }

        return output.observers.length > 0;
      }
    })
  };
}