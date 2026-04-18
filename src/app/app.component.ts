import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visor: string = '';
  num1: number = 0;
  oper: string = '';
  novoNumero: boolean = false;

  adicionar(valor: string) {
    if (this.novoNumero) {
      this.visor = '';
      this.novoNumero = false;
    }
    this.visor += valor;
  }

  operacao(op: string) {
    this.num1 = Number(this.visor);
    this.oper = op;
    this.novoNumero = true;
  }

  calcular() {
    const num2 = Number(this.visor);
    let resultado = 0;

    switch (this.oper) {
      case '+':
        resultado = this.num1 + num2;
        break;
      case '-':
        resultado = this.num1 - num2;
        break;
      case '*':
        resultado = this.num1 * num2;
        break;
      case '/':
        resultado = num2 !== 0 ? this.num1 / num2 : 0;
        break;
    }

    this.visor = resultado.toString();
    this.novoNumero = true;
  }

  limpar() {
    this.visor = '';
    this.num1 = 0;
    this.oper = '';
  }

  apagar() {
    this.visor = this.visor.slice(0, -1);
  }
}
