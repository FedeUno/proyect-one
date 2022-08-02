import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../intefaces/dbz.inteface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personajes: Personaje[] = [];

  @Input() new: Personaje = {
    name: '',
    power: 0,
  };

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.new)
    
    this.new = {
      name: '',
      power: 0,
    };
  }
}
