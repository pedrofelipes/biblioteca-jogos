import { Component } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service';
import { Jogo, JogoTabuleiro, JogoCarta } from '../jogo.model';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css'],
})
export class BibliotecaComponent {
  jogos: Jogo[] = [];
  novoJogo = {
    tipo: 'tabuleiro',
    titulo: '',
    anoPublicacao: 0,
    fabricante: '',
    numeroJogadores: 0,
    idadeMinima: 0,
  };

  constructor(private bibliotecaService: BibliotecaService) {
    this.carregarJogos();
  }

  carregarJogos(): void {
    this.jogos = this.bibliotecaService.listarJogos();
  }

  adicionarJogo(): void {
    if (this.novoJogo.tipo === 'tabuleiro') {
      this.bibliotecaService.adicionarJogo(
        new JogoTabuleiro(
          this.novoJogo.titulo,
          this.novoJogo.anoPublicacao,
          this.novoJogo.fabricante,
          this.novoJogo.numeroJogadores
        )
      );
    } else if (this.novoJogo.tipo === 'carta') {
      this.bibliotecaService.adicionarJogo(
        new JogoCarta(
          this.novoJogo.titulo,
          this.novoJogo.anoPublicacao,
          this.novoJogo.fabricante,
          this.novoJogo.idadeMinima
        )
      );
    }
    this.carregarJogos();
  }

  removerJogo(titulo: string): void {
    this.bibliotecaService.removerJogo(titulo);
    this.carregarJogos();
  }
}
