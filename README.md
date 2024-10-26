# 📐 Projeto de Componentes em Angular

### Autor: Davi Nascimento

Este projeto contém uma série de componentes desenvolvidos para demonstrar a criação e implementação de diferentes funcionalidades em Angular. Cada componente foi desenvolvido com uma finalidade específica e regras de validação adequadas, proporcionando uma experiência prática sobre formulários e cálculos em uma aplicação Angular.

---

## 🧮 Componente de Calculadora

O componente de **Calculadora** permite ao usuário realizar operações matemáticas básicas, como soma, subtração, multiplicação e divisão entre dois números. O componente valida as entradas para garantir que apenas números entre 0 e 10 sejam utilizados e fornece feedback para entradas inválidas.

### Código do Componente

```typescript
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = 'soma';
  resultado: number | null = null;
  mensagemErro: string = '';

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
        this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : null;
        break;
      default:
        this.resultado = null;
    }
  }

  validarNumber(): boolean {
    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      this.mensagemErro = "Por favor, insira valores numéricos.";
      return false;
    }
    this.mensagemErro = '';
    return true;
  }

  validarMaxNumber(): boolean {
    if (this.numero1 > 10 || this.numero1 < 0 || this.numero2 > 10 || this.numero2 < 0) {
      this.mensagemErro = "Por favor, insira valores entre 0 e 10.";
      return false;
    }
    this.mensagemErro = '';
    return true;
  }
}
```	
## 📄 Componente de Cadastro de Aluno
O componente Cadastro de Aluno possui um formulário com os campos: RA, nome, email e celular. Todos os campos são obrigatórios, e o sistema exibe uma mensagem de erro caso o formulário não seja preenchido corretamente. Ao submeter o formulário com sucesso, o componente exibe uma mensagem de confirmação e limpa o formulário.

### Código do Componente

```typescript

export class CadastroAlunoComponent {
  aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };
  mensagemErro: string = '';

  validarFormulario(): boolean {
    if (!this.aluno.ra || !this.aluno.nome || !this.aluno.email || !this.aluno.celular) {
      this.mensagemErro = 'Todos os campos são obrigatórios.';
      return false;
    }
    this.mensagemErro = '';
    return true;
  }

  cadastrar(): void {
    if (this.validarFormulario()) {
      console.log('Cadastro realizado com sucesso:', this.aluno);
      alert('Cadastro realizado com sucesso!');
      this.aluno = { ra: '', nome: '', email: '', celular: '' };
    }
  }
}
```
## 🛡️ Componente de Apólice de Seguro
O componente Apólice de Seguro permite calcular o valor de uma apólice para seguro de automóvel. O cálculo do valor depende de regras baseadas na idade e no sexo do segurado. Se as entradas estiverem incompletas ou incorretas, o sistema exibirá mensagens de erro apropriadas.

## Código do Componente
 ```typescript
 export class ApoliceSeguroComponent {
  segurado = {
    nome: '',
    sexo: 'masculino',
    idade: null,
    valorAutomovel: null
  };

  valorApolice: number | null = null;
  mensagemErro: string = '';

  calcularValorApolice(): void {
    this.mensagemErro = '';

    if (!this.segurado.nome || !this.segurado.sexo || this.segurado.idade === null || this.segurado.valorAutomovel === null) {
      this.mensagemErro = 'Todos os campos são obrigatórios.';
      return;
    }

    if (this.segurado.valorAutomovel <= 0) {
      this.mensagemErro = 'O valor do automóvel deve ser maior que zero.';
      return;
    }

    if (this.segurado.sexo === 'masculino') {
      this.valorApolice = this.segurado.idade <= 25 ? this.segurado.valorAutomovel * 0.15 : this.segurado.valorAutomovel * 0.10;
    } else {
      this.valorApolice = this.segurado.valorAutomovel * 0.08;
    }
  }
}
```
## 📝 Componente de Cálculo de Média
O componente Calcular Média calcula a média ponderada das notas de um aluno, baseando-se nos valores de AC1, AC2, AG e AF. Além do cálculo, este componente também valida que os valores estão dentro de um intervalo de 0 a 10, exibindo mensagens de erro caso sejam inválidos.

### Código do Componente
```typescript
export class CalcularMediaComponent {
  title = 'calcular-media';
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: number | null = null;
  mensagemErro: string = '';

  calcularMedia() {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
  }

  validarNumber(): boolean {
    if (isNaN(this.ac1) || isNaN(this.ac2) || isNaN(this.ag) || isNaN(this.af)) {
      this.mensagemErro = "Por favor, insira valores numéricos.";
      return false;
    }
    this.mensagemErro = '';
    return true;
  }

  validarMaxNumber(): boolean {
    if (this.ac1 > 10 || this.ac1 < 0 || this.ac2 > 10 || this.ac2 < 0 || this.ag > 10 || this.ag < 0 || this.af > 10 || this.af < 0) {
      this.mensagemErro = "Por favor, insira valores entre 0 e 10.";
      return false;
    }
    this.mensagemErro = '';
    return true;
  }
}
```
> 💡 **Observação:** Esses componentes exemplificam o uso de validações e a criação de lógica de negócios em uma aplicação Angular. Cada um foi desenvolvido para lidar com entradas específicas e fornecer feedback claro ao usuário, oferecendo uma experiência interativa e educativa.
