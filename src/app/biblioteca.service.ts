import { Injectable } from '@angular/core';
import { Biblioteca, Jogo, JogoTabuleiro, JogoCarta } from './jogo.model';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private biblioteca = new Biblioteca();

  adicionarJogo(jogo: Jogo): void {
    this.biblioteca.adicionarJogo(jogo);
  }

  removerJogo(titulo: string): void {
    this.biblioteca.removerJogo(titulo);
  }

  listarJogos(): Jogo[] {
    return this.biblioteca.listarJogos();
  }
}
