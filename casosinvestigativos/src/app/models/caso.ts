import { Investigador } from './investigador';

export class Caso {
  constructor(
    public titulo: string,
    public descricao: string,
    public investigadorResponsavel: Investigador
  ) {}

  detalharCaso(): string {
    return `Caso: ${this.titulo}, Descrição: ${this.descricao}, Investigador Responsável: ${this.investigadorResponsavel.apresentar()}`;
  }
}