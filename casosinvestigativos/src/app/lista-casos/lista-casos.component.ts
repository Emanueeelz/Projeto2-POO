import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CasoService } from '../services/caso.service';
import { Caso } from '../models/caso';
import { Investigador } from '../models/investigador';

@Component({
  selector: 'app-lista-casos',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css'],
})
export class ListaCasosComponent implements OnInit {
  casos: Caso[] = [];
  novoCaso = {
    titulo: '',
    descricao: '',
    investigador: new Investigador('', 0, '', ''),
  };

  constructor(private casoService: CasoService) {}

  ngOnInit(): void {
    const investigador = new Investigador('James Doakes', 44, '638.656.959-31', 'DOK341');
    this.casoService.adicionarCaso('Assassino do caminhão de gelo', 'Envolve uma série de assassinatos de prostitutas cujo sangue foi drenado e desmembradas.', investigador);
    this.casoService.adicionarCaso('Açougueiro de Bay Harbor', 'Mergulhadores descobriram muitos sacos de lixo contendo partes de corpos. Devido ao local onde os corpos foram encontrados e como foram cortados, a mídia apelidou o assassino desconhecido de "O Açougueiro de Bay Harbor".', investigador);

    this.casos = this.casoService.listarCasos();
  }

  adicionarCaso(): void {
    const { titulo, descricao, investigador } = this.novoCaso;
    if (titulo && descricao && investigador.nome && investigador.idade && investigador.cpf && investigador.numeroIdentificacao) {
      this.casoService.adicionarCaso(titulo, descricao, investigador);
      this.casos = this.casoService.listarCasos();
      this.limparFormulario();
    } else {
      alert('Preencha todos os campos!');
    }
  }

  limparFormulario(): void {
    this.novoCaso = {
      titulo: '',
      descricao: '',
      investigador: new Investigador('', 0, '', ''),
    };
  }
}