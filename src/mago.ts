import { personagem } from "./personagem.ts";
import magoA1 from "../public/imgs/magoA1.png";
import magoA2 from "../public/imgs/magoA2.png";
import magoA3 from "../public/imgs/magoA3.png";
import magoPadrao from "../public/imgs/magoPadrao.png";
import magoDano from "../public/imgs/magoDano.png";
export class Mago extends personagem {
  // "extends" faz com que essa classe carro seja filha da classe funcionario.
  constructor(nome: string, vida: number, defesa: number) {
    super(
      nome,
      vida,
      defesa,
      magoPadrao,
      magoDano,
    );
  }

  public atacar(persona: personagem): void {
    let dano = 0;
    let gerarAtaque = this.gerarAtaque();

    if (gerarAtaque == 0) {
      this.exibirMsg(
        `${this.nome} ataca com bola de fogo, o personagem ${persona.nome}`,
      );
      dano = 20;
      this.setImg(
        magoA1,
      );
    } else if (gerarAtaque == 1) {
      this.exibirMsg(
        `${this.nome} ataca com esfera o personagem ${persona.nome}`,
      );
      dano = 30;
      this.setImg(
        magoA2,
      );
    } else {
      this.exibirMsg(
        `${this.nome} ataca com criastal o personagem ${persona.nome}`,
      );
      dano = 40;
      this.setImg(
       magoA3,
      );
    }

    persona.alterarImgSofrerAtaque();
    persona.receberDano(dano);

    if (this.vida < 150) {
      this.regenerar(10);
    }
  }
}
