import { Component } from '@angular/core';
import { Personaje } from '../intefaces/dbz.inteface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      name:'Goku',
      power:15000
    },
    {
      name:'Vegeta',
      power:7500
    }

  ];

  new: Personaje={
    name:'Cristina',
    power: 1000
  }

  addNewCharacter(arg:Personaje){
    this.personajes.push(arg)
  }

}
