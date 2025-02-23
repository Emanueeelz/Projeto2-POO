export class Pessoa {
    constructor(
      public nome: string,
      public idade: number,
      public cpf: string
    ) {}
  
    apresentar(): string {
      return `Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}`;
    }
  }