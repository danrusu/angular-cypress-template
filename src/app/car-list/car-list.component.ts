import { Component, EventEmitter, Input, Output } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-stepper',
  template: `
    <div>
      
      <span data-cy="counter">{{ count }}</span>
      <button aria-label="increment" (click)="increment()">+</button>
    </div>
  `,
})
export class CarListComponent {
  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    .get<Config>(this.configUrl)
  }

  decrement(): void {
    this.count--
    this.change.emit(this.count)
  }
}