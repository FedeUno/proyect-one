import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="accumulate(-base)">-{{ base }}</button>

    <span>{{ counter }} </span>

    <button (click)="accumulate(base)">+ {{ base }}</button>
    <br />
    <br />
    <div>
      <button (click)="reset()">RESET</button>
    </div>

    <br />
    <br />
    <div>
      <input id="el" type="number" />

      <button (click)="accumulate(3)">accum</button>
    </div>
  `,
})
export class CounterComponent {
  title: string = 'Contador App';
  counter: number = 0;

  add() {
    this.counter += 1;
  }
  substract() {
    this.counter > 0 ? (this.counter -= 1) : this.counter;
  }
  reset() {
    this.counter = 1;
  }
  base: number = 5;

  accumulate(value: number) {
    this.counter += value;
  }
}
