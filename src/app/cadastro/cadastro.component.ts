import { Component } from '@angular/core'; // Importa o decorador Component, necessário para definir um componente Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule para funcionalidades comuns no Angular
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabalhar com formulários reativos e ngModel

@Component({
  selector: 'cadastro', // Define o seletor do componente que será usado no HTML
  standalone: true, // Especifica que o componente é independente
  imports: [FormsModule, CommonModule], // Importa os módulos necessários para o funcionamento do componente
  templateUrl: './cadastro.component.html', // Define o arquivo HTML associado ao template do componente
  styleUrls: ['./cadastro.component.css'] // Define o arquivo CSS com estilos para o componente
})
export class CadastroAlunoComponent {
  // Objeto 'aluno' para armazenar os dados de entrada do formulário
  aluno = {
    ra: '', // Campo para o Registro Acadêmico do aluno
    nome: '', // Campo para o nome do aluno
    email: '', // Campo para o email do aluno
    celular: '' // Campo para o celular do aluno
  };

  mensagemErro: string = ''; // Propriedade para armazenar mensagens de erro

  // Função para validar os campos do formulário
  validarFormulario(): boolean {
    // Verifica se todos os campos estão preenchidos
    if (!this.aluno.ra || !this.aluno.nome || !this.aluno.email || !this.aluno.celular) {
      this.mensagemErro = 'Todos os campos são obrigatórios.'; // Define uma mensagem de erro se algum campo estiver vazio
      return false; // Retorna false se a validação falhar
    }
    this.mensagemErro = ''; // Limpa a mensagem de erro se todos os campos estão preenchidos
    return true; // Retorna true se a validação for bem-sucedida
  }

  // Função para cadastrar o aluno
  cadastrar(): void {
    // Verifica se o formulário é válido antes de continuar
    if (this.validarFormulario()) {
      console.log('Cadastro realizado com sucesso:', this.aluno); // Exibe os dados no console para verificação
      alert('Cadastro realizado com sucesso!'); // Exibe uma mensagem de sucesso ao usuário
      this.aluno = { ra: '', nome: '', email: '', celular: '' }; // Limpa o formulário após o cadastro
    }
  }
}
