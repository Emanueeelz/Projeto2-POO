import { Pessoa } from './pessoa';

export class Investigador extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    public numeroIdentificacao: string
  ) {
    super(nome, idade, cpf);
  }

  override apresentar(): string {
    return `${super.apresentar()}, Número de Identificação: ${this.numeroIdentificacao}`;
  }
}