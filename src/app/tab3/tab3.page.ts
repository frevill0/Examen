import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  input: string = '';  // Cadena que muestra lo que el usuario ha introducido
  result: string = ''; // Cadena para mostrar el resultado calculado

  constructor() {}

  // Función para agregar números o operadores a la entrada
  addToInput(value: string) {
    this.input += value;
  }

  // Función para calcular el resultado
  calculate() {
    try {
      // Evalúa la expresión usando eval
      this.input = eval(this.input);
    } catch (e) {
      this.input = 'Error';
    }
  }

  // Función para limpiar la entrada
  clear() {
    this.input = '';
  }
}
