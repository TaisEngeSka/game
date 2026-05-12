import { personagem } from "./personagem.ts";

export class Mago extends personagem {
  // "extends" faz com que essa classe carro seja filha da classe funcionario.
  constructor(nome: string, vida: number, defesa: number) {
    super(
      nome,
      vida,
      defesa,
    "public/magoA1.png",
   "./public/magoA1.png" );
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
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA3.png",
      );
    } else if (gerarAtaque == 1) {
      this.exibirMsg(
        `${this.nome} ataca com esfera o personagem ${persona.nome}`,
      );
      dano = 30;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA1.png",
      );
    } else {
      this.exibirMsg(
        `${this.nome} ataca com criastal o personagem ${persona.nome}`,
      );
      dano = 40;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA2.png",
      );
    }

    persona.alterarImgSofrerAtaque();
    persona.receberDano(dano);

    if (this.vida < 150) {
      this.regenerar(10);
    }
  }
}
