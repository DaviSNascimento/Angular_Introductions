import { Component } from '@angular/core'; // Importa o decorador Component para definir um componente Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule com funcionalidades padrão do Angular
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel com formulários

@Component({
  selector: 'calcular-media', // Define o seletor do componente para uso no HTML
  standalone: true, // Declara que o componente é autônomo e não depende de um módulo específico
  imports: [FormsModule, CommonModule], // Importa módulos necessários para o funcionamento do componente
  templateUrl: './calcular-media.component.html', // Arquivo de template HTML do componente
  styleUrl: './calcular-media.component.css' // Arquivo de estilos CSS do componente (erro corrigido para `styleUrls`)
})
export class CalcularMediaComponent {
  title = 'calcular-media'; // Define um título simples para o componente
  ac1: number = 0; // Nota de AC1 (Avaliação Contínua 1)
  ac2: number = 0; // Nota de AC2 (Avaliação Contínua 2)
  ag: number = 0; // Nota de AG (Avaliação Global)
  af: number = 0; // Nota de AF (Avaliação Final)
  resultado: number | null = null; // Resultado do cálculo da média
  mensagemErro: string = ''; // Armazena mensagens de erro, se houver

  // Função para calcular a média ponderada com pesos específicos para cada nota
  calcularMedia() {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
  }

  // Função para validar se todos os campos inseridos são numéricos
  validarNumber() {
    if (isNaN(this.ac1) || isNaN(this.ac2) || isNaN(this.ag) || isNaN(this.af)) {
      this.mensagemErro = "Por favor, insira valores numéricos."; // Mensagem de erro se algum valor não for numérico
      return false;
    }
    this.mensagemErro = ''; // Limpa a mensagem de erro caso a validação passe
    return true;
  }

  // Função para validar se as notas estão dentro do intervalo permitido (0 a 10)
  validarMaxNumber() {
    if (this.ac1 > 10 || this.ac1 < 0 || this.ac2 > 10 || this.ac2 < 0 || this.ag > 10 || this.ag < 0 || this.af > 10 || this.af < 0) {
      this.mensagemErro = "Por favor, insira valores entre 0 e 10."; // Erro se qualquer valor estiver fora do intervalo
      return false;
    }
    this.mensagemErro = ''; // Limpa a mensagem de erro caso a validação passe
    return true;
  }
}
