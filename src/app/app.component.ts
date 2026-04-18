import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = this.num1 + this.num2;
  }

  subtrair() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      alert('Não pode dividir por zero');
    }
  }
}
