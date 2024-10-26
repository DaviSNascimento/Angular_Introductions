import { Component } from '@angular/core'; // Importa o decorador Component para definir um componente Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule para funcionalidades essenciais do Angular
import { FormsModule } from '@angular/forms'; // Importa FormsModule para uso do ngModel em formulários

@Component({
  selector: 'calculadora', // Define o seletor do componente para ser usado no HTML
  standalone: true, // Declara que o componente é autônomo
  imports: [FormsModule, CommonModule], // Importa os módulos necessários
  templateUrl: './calculadora.component.html', // Template HTML do componente
  styleUrls: ['./calculadora.component.css'] // Corrigido: define o arquivo de estilo CSS do componente
})
export class CalculadoraComponent {
  // Propriedades para armazenar os números de entrada e a operação
  numero1: number = 0; // Primeiro número da operação
  numero2: number = 0; // Segundo número da operação
  operacao: string = 'soma'; // Tipo de operação selecionada pelo usuário
  resultado: number | null = null; // Resultado da operação
  mensagemErro: string = ''; // Mensagem de erro, se houver, exibida para o usuário

  // Função para calcular o resultado da operação com base na propriedade `operacao`
  calcular(): void {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        // Valida se o segundo número é zero para evitar divisão por zero
        this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : null;
        break;
      default:
        this.resultado = null;
    }
  }

  // Função para validar se os números inseridos são válidos (numéricos)
  validarNumber(): boolean {
    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      this.mensagemErro = "Por favor, insira valores numéricos."; // Mensagem de erro se os valores não forem numéricos
      return false;
    }
    this.mensagemErro = ''; // Limpa a mensagem de erro caso a validação passe
    return true;
  }
  
  // Função para validar se os números estão no intervalo de 0 a 10
  validarMaxNumber(): boolean {
    if (this.numero1 > 10 || this.numero1 < 0 || this.numero2 > 10 || this.numero2 < 0) {
      this.mensagemErro = "Por favor, insira valores entre 0 e 10."; // Mensagem de erro se os valores estão fora do intervalo
      return false;
    }
    this.mensagemErro = ''; // Limpa a mensagem de erro caso a validação passe
    return true;
  }
}
