import { personagem } from "./personagem.ts";

export class guer extends personagem {
  // "extends" faz com que essa classe seja filha da classe original.
  constructor(nome: string, vida: number, defesa: number) {
    super(
      nome,
      vida,
      defesa,
      "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerPadrao.png",
      "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerDano.png",
    );
  }

  public atacar(persona: personagem): void {
    let dano = 0;
    let gerarAtaque = this.gerarAtaque();

    if (gerarAtaque == 0) {
      this.exibirMsg(`${this.nome} ataque reto o personagem ${persona.nome}`);
      dano = 20;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA3.png",
      );
    } else if (gerarAtaque == 1) {
      this.exibirMsg(
        `${this.nome} ataca diagonal o personagem ${persona.nome}`,
      );
      dano = 30;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA1.png",
      );
    } else {
      this.exibirMsg(
        `${this.nome} ataque supremo o personagem ${persona.nome}`,
      );
      dano = 40;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/gueraA2.png",
      );
    }

    if (this.vida < 150) {
      this.regenerar(10);
    }

    persona.alterarImgSofrerAtaque();
    persona.receberDano(dano);
  }
}
