import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  startDate: string;  // Fecha de inicio
  endDate: string;    // Fecha de fin
  daysDifference: string; // Diferencia en días

  constructor() {
    // Inicializar las fechas a hoy
    const today = new Date().toISOString().split('T')[0];
    this.startDate = today;
    this.endDate = today;
    this.daysDifference = '';
  }

  // Función para calcular la diferencia en días
  calculateDays() {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertir a días

    this.daysDifference = diffDays.toString();
  }

  // Función para limpiar los campos
  clear() {
    this.startDate = '';
    this.endDate = '';
    this.daysDifference = '';
  }
}
