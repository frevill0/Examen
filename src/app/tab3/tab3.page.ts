import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  input: string = '';  // Coeficiente a
  input1: string = ''; // Coeficiente b
  input2: string = ''; // Coeficiente c
  input3: string = ''; // Resultado 1
  input4: string = ''; // Resultado 2

  constructor() {}

  // Función para calcular el resultado
  calculate() {
    try {
      let a = +this.input;
      let b = +this.input1;
      let c = +this.input2;

      // Calculando el discriminante
      let disc = (b * b - 4 * a * c);

      // Verificar si el discriminante es positivo, cero o negativo
      if (disc > 0) {
        // Dos raíces reales diferentes
        const root1 = (-b + Math.sqrt(disc)) / (2 * a);
        const root2 = (-b - Math.sqrt(disc)) / (2 * a);
        this.input3 = root1.toString();
        this.input4 = root2.toString();
      } else if (disc === 0) {
        // Una raíz real doble
        const root = -b / (2 * a);
        this.input3 = root.toString();
        this.input4 = root.toString();
      } else {
        // Raíces complejas
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
        this.input3 = `${realPart} + ${imaginaryPart}i`;
        this.input4 = `${realPart} - ${imaginaryPart}i`;
      }
    } catch (e) {
      this.input3 = 'Error';
      this.input4 = 'Error';
    }
  }
}
