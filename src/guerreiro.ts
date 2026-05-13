import { personagem } from "./personagem.ts";
import guerA1 from "../public/imgs/guerA1.png";
import guerA2 from "../public/imgs/guerA2.png";
import guerA3 from "../public/imgs/guerA3.png";
import guerPadrao from "../public/imgs/guerPadrao.png";
import guerDano from "../public/imgs/guerDano.png";
export class guer extends personagem {
  // "extends" faz com que essa classe seja filha da classe original.
  constructor(nome: string, vida: number, defesa: number) {
    super(
      nome,
      vida,
      defesa,
      guerPadrao,
      guerDano,
    );
  }

  public atacar(persona: personagem): void {
    let dano = 0;
    let gerarAtaque = this.gerarAtaque();

    if (gerarAtaque == 0) {
      this.exibirMsg(`${this.nome} ataque reto o personagem ${persona.nome}`);
      dano = 20;
      this.setImg(
        guerA1,
      );
    } else if (gerarAtaque == 1) {
      this.exibirMsg(
        `${this.nome} ataca diagonal o personagem ${persona.nome}`,
      );
      dano = 30;
      this.setImg(
       guerA2,
      );
    } else {
      this.exibirMsg(
        `${this.nome} ataque supremo o personagem ${persona.nome}`,
      );
      dano = 40;
      this.setImg(
      guerA3,
      );
    }

    if (this.vida < 150) {
      this.regenerar(10);
    }

    persona.alterarImgSofrerAtaque();
    persona.receberDano(dano);
  }
}
