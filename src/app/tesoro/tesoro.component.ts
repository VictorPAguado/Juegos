import { Component } from '@angular/core';

@Component({
  selector: 'app-tesoro',
  templateUrl: './tesoro.component.html',
  styleUrls: ['./tesoro.component.scss']
})
export class TesoroComponent {
  numIntentos!: number
  matrizImagenes!: any
  numFilas!: any
  numColumnas!: number
  posicionTesoro!: any
  encontrado = false;

  empezarJuego() {
    this.numIntentos = 0;
    this.matrizImagenes = [];
    for (let i = 0; i < this.numFilas; i++) {
      const fila = [];
      for (let j = 0; j < this.numColumnas; j++) {
        fila.push('vacio');
      }
      this.matrizImagenes.push(fila);
    }
    const filaAleatoria = Math.floor(Math.random() * this.numFilas);
    const columnaAleatoria = Math.floor(Math.random() * this.numColumnas);
    this.posicionTesoro = {fila: filaAleatoria, columna: columnaAleatoria};
  }

  clickCelda(fila: number, columna: number) {
    this.numIntentos++;
    if (fila === this.posicionTesoro.fila && columna === this.posicionTesoro.columna) {
      this.matrizImagenes[fila][columna] = 'tesoro';
      this.encontrado = true;
      alert('¡Encontraste el tesoro en ' + this.numIntentos + ' intentos!');
    } else {
      this.matrizImagenes[fila][columna] = 'error';
    }
  }
  resetearJuego() {
    this.encontrado = false;
    this.empezarJuego();
  }
}  


