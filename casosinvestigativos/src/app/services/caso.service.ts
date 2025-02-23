import { Injectable } from '@angular/core';
import { Caso } from '../models/caso';
import { Investigador } from '../models/investigador';

@Injectable({
  providedIn: 'root',
})
export class CasoService {
  private casos: Caso[] = [];

  constructor() {}

  adicionarCaso(titulo: string, descricao: string, investigador: Investigador): void {
    const novoCaso = new Caso(titulo, descricao, investigador);
    this.casos.push(novoCaso);
  }

  listarCasos(): Caso[] {
    return this.casos;
  }
}