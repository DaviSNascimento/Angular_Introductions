import { Component } from '@angular/core'; // Importa o decorador Component para definir o componente Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule para funcionalidades comuns
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabalhar com formulários

@Component({
  selector: 'apolice-seguro', // Define o seletor para o componente, que será usado no HTML
  standalone: true, // Indica que o componente é independente
  imports: [FormsModule, CommonModule], // Importa módulos necessários para o funcionamento do componente
  templateUrl: './apolice-seguro.component.html', // Especifica o arquivo HTML associado ao componente
  styleUrls: ['./apolice-seguro.component.css'] // Especifica o arquivo CSS para estilos do componente
})
export class ApoliceSeguroComponent {
  // Define um objeto para armazenar os dados do segurado
  segurado = {
    nome: '', // Nome do segurado
    sexo: 'masculino', // Sexo do segurado, padrão é masculino
    idade: null, // Idade do segurado
    valorAutomovel: null // Valor do automóvel
  };

  valorApolice: number | null = null; // Armazena o valor calculado da apólice, inicializado como nulo
  mensagemErro: string = ''; // Armazena mensagens de erro para validação de entrada

  // Método para calcular o valor da apólice de seguro
  calcularValorApolice(): void {
    this.mensagemErro = ''; // Limpa mensagens de erro a cada cálculo

    // Validação: Verifica se todos os campos obrigatórios foram preenchidos
    if (!this.segurado.nome || !this.segurado.sexo || this.segurado.idade === null || this.segurado.valorAutomovel === null) {
      this.mensagemErro = 'Todos os campos são obrigatórios.'; // Mensagem de erro se algum campo obrigatório estiver vazio
      return; // Sai do método se a validação falhar
    }

    // Validação: Verifica se o valor do automóvel é maior que zero
    if (this.segurado.valorAutomovel <= 0) {
      this.mensagemErro = 'O valor do automóvel deve ser maior que zero.'; // Mensagem de erro para valor inválido
      return; // Sai do método se a validação falhar
    }

    // Cálculo do valor da apólice com base no sexo e idade do segurado
    if (this.segurado.sexo === 'masculino') {
      // Se o sexo for masculino, aplica as taxas baseadas na idade
      this.valorApolice = this.segurado.idade <= 25 
        ? this.segurado.valorAutomovel * 0.15 // 15% se a idade for 25 ou menos
        : this.segurado.valorAutomovel * 0.10; // 10% se a idade for maior que 25
    } else {
      // Se o sexo for feminino, aplica uma taxa fixa de 8%
      this.valorApolice = this.segurado.valorAutomovel * 0.08;
    }
  }
}
