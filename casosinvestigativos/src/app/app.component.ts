import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCasosComponent } from './lista-casos/lista-casos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaCasosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sistema de Casos Investigativos - Atividade Avaliativa POO';
}