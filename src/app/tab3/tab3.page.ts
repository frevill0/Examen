import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  input: string = '';  // Cadena que muestra lo que el usuario ha introducido
  input1: string = '';  // Cadena que muestra lo que el usuario ha introducido
  input2: string = ''; 
  input3: string = '';
  input4: string = '';

  constructor() {}

  // Función para agregar números o operadores a la entrada
  addToInput(value: string) {
    this.input = value;
  }

  addToInput1(value: string) {
    this.input1 = value;
  }

  addToInput2(value: string) {
    this.input2 = value;
  }

  // Función para calcular el resultado
  calculate() {
    try {
      let a = +this.input
      let b = +this.input1
      let c = +this.input2

      let disc = (b*b - 4*a*c);



    } catch (e) {
      this.input4 = 'Error'
      this.input3 = 'Error';
    }
  }

  // Función para limpiar la entrada
  clear() {
    this. input = '';
  }
}
