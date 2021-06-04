import { EventEmitter, Output } from "@angular/core";
import { ActiveOutput } from '@ngx-output/index';

class SimpleComponent {
  @Output() click = new EventEmitter<void>();
  @ActiveOutput('click') clickable!: boolean;
}

test('detects no subscribers', () => {
  const simple = new SimpleComponent();

  expect(simple.clickable).toEqual(false);
});

test('detects subscribers', () => {
  const simple = new SimpleComponent();
  simple.click.subscribe();

  expect(simple.clickable).toEqual(true);
});

test('detects unsubscriptions', () => {
  const simple = new SimpleComponent();
  simple.click.subscribe().unsubscribe();

  expect(simple.clickable).toEqual(false);
});