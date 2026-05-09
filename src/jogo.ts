import { guer } from "./guerreiro.ts";
import { Mago } from "./mago.ts";
import { personagem } from "./personagem.ts";

export class jogo {
  public async inicial(player1: personagem, player2: personagem) {
    let turno = 1;

    this.atualizarInterface(player1, player2);

    while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
      player1.exibirMsg(
        "\n ================= turno " + turno + "===================",
      );
      player1.atacar(player2);
      this.attImg(player1,player2);
      this.atualizarInterface(player1, player2);
      player2.alterarImgSofrerAtaque();
      await this.esperaTempo();

      player1.setImg(player1.imagemPadrao);
      player2.setImg(player2.imagemPadrao);
      this.attImg(player1, player2);

      if (!player2.isContinuaVivo()) {
        break;
      }

      player2.atacar(player1);
      this.attImg(player1, player2);
      this.atualizarInterface(player1, player2);
      player1.alterarImgSofrerAtaque();
      await this.esperaTempo();
      
      player1.setImg(player1.imagemPadrao);
      player2.setImg(player2.imagemPadrao);
      this.attImg(player1, player2);

      turno += 1;
    }
    if (player1.isContinuaVivo()) {
      player1.exibirMsg(`${player1.nome} ganhou a luta.`);
    } else {
      player1.exibirMsg(`${player2.nome} ganhou a luta.`);
    }
  }

  buscaComponenteHTML(id: string) {
    return document.getElementById(id);
  }

  public attImg(jogadorUm: personagem, jogadorDois: personagem) {
    (this.buscaComponenteHTML("imgJogadorUm") as HTMLImageElement).src =
      jogadorUm.getImg();
    (this.buscaComponenteHTML("imgJogadorDois") as HTMLImageElement).src =
      jogadorDois.getImg();
  }

  public atualizarInterface(jogadorUm: personagem, jogadorDois: personagem) {
    this.buscaComponenteHTML("saudeUm")!.textContent =
      "𝖍𝖕: " + jogadorUm.getVida();
    this.buscaComponenteHTML("saudeDois")!.textContent =
      "𝖍𝖕: " + jogadorDois.getVida();

      
      

((this.buscaComponenteHTML("playerDoisPorcentagem")) as HTMLElement).style.width = (jogadorDois.getVida() * 100 ) / jogadorDois.vidaMax + "%";
((this.buscaComponenteHTML("playerUmPorcentagem")) as HTMLElement).style.width = (jogadorUm.getVida() * 100 ) / jogadorUm.vidaMax + "%";
      

    this.buscaComponenteHTML("nomeUm")!.textContent = jogadorUm.nome;
    this.buscaComponenteHTML("nomeDois")!.textContent = jogadorDois.nome;
  }

  public esperaTempo() {
    return new Promise((X) => setTimeout(X, 800));
  }
}

function construirJogo() {
  let mago: Mago = new Mago("mago", 10, 200, 15, 20);
  let guerer: guer = new guer("guerreiro", 10, 200, 15, 20);

  let game: jogo = new jogo();
  game.inicial(mago, guerer);
}

document.getElementById("botaoJogar")!.addEventListener("click", construirJogo);
