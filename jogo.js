"use strict";
(() => {
  // src/personagem.ts
  var personagem = class {
    constructor(nome, vida, imagem, imgtomouDano) {
      this.nome = "personagem";
      this.vida = 0;
      this.vidaMax = 0;
      this.imagem = "";
      this.imagemPadrao = "";
      this.imagemTomouDano = "";
      this.nome = nome;
      this.vida = vida;
      this.imagem = imagem;
      this.imagemPadrao = imagem;
      this.imagemTomouDano = imgtomouDano;
      this.vidaMax = vida;
    }
    isContinuaVivo() {
      return this.vida > 0;
    }
    getVida() {
      return this.vida;
    }
    getImg() {
      return this.imagem;
    }
    setImg(img) {
      this.imagem = img;
    }
    gerarAtaque() {
      let maximoAtk = 3;
      return Math.floor(Math.random() * maximoAtk);
    }
    receberDano(dano) {
      this.vida -= dano;
      this.exibirMsg(
        `${this.nome} recebeu ${dano} de dano, Vida atual ${this.vida}`
      );
    }
    regenerar(extra) {
      this.vida += extra;
      this.exibirMsg(`${this.nome} regenerou ${extra}`);
    }
    exibirMsg(mensagem) {
      document.getElementById("console").innerHTML += "<p>" + mensagem + "<p>";
    }
    alterarImgSofrerAtaque() {
      this.imagem = this.imagemTomouDano;
    }
  };

  // public/imgs/guerA1.png
  var guerA1_default = "./guerA1-FRJTKGFT.png";

  // public/imgs/guerA2.png
  var guerA2_default = "./guerA2-PNPXVWDY.png";

  // public/imgs/guerA3.png
  var guerA3_default = "./guerA3-TGTEUU5T.png";

  // public/imgs/guerPadrao.png
  var guerPadrao_default = "./guerPadrao-O2QMKKRB.png";

  // public/imgs/guerDano.png
  var guerDano_default = "./guerDano-UYKBGPL7.png";

  // src/guerreiro.ts
  var guer = class extends personagem {
    // "extends" faz com que essa classe seja filha da classe original.
    constructor(nome, vida) {
      super(nome, vida, guerPadrao_default, guerDano_default);
    }
    atacar(persona) {
      let dano = 0;
      let gerarAtaque = this.gerarAtaque();
      switch (gerarAtaque) {
        case 0:
          this.exibirMsg(`${this.nome} ataque reto o personagem ${persona.nome}`);
          dano = 20;
          this.setImg(guerA1_default);
          break;
        case 1:
          this.exibirMsg(
            `${this.nome} ataca diagonal o personagem ${persona.nome}`
          );
          dano = 30;
          this.setImg(guerA2_default);
          break;
        case 2:
          this.exibirMsg(
            `${this.nome} ataque supremo o personagem ${persona.nome}`
          );
          dano = 40;
          this.setImg(guerA3_default);
          break;
      }
      persona.alterarImgSofrerAtaque();
      persona.receberDano(dano);
      if (this.vida < 150) {
        this.regenerar(10);
      }
    }
  };

  // public/imgs/magoA1.png
  var magoA1_default = "./magoA1-KRZMT6DW.png";

  // public/imgs/magoA2.png
  var magoA2_default = "./magoA2-7KAMES3X.png";

  // public/imgs/magoA3.png
  var magoA3_default = "./magoA3-OXQF36WY.png";

  // public/imgs/magoPadrao.png
  var magoPadrao_default = "./magoPadrao-ELAAEEVG.png";

  // public/imgs/magoDano.png
  var magoDano_default = "./magoDano-ADCJ4XH4.png";

  // src/mago.ts
  var Mago = class extends personagem {
    // "extends" faz com que essa classe carro seja filha da classe funcionario.
    constructor(nome, vida) {
      super(nome, vida, magoPadrao_default, magoDano_default);
    }
    atacar(persona) {
      let dano = 0;
      let gerarAtaque = this.gerarAtaque();
      switch (gerarAtaque) {
        case 0:
          this.exibirMsg(
            `${this.nome} ataca com bola de fogo, o personagem ${persona.nome}`
          );
          dano = 20;
          this.setImg(magoA1_default);
          break;
        case 1:
          this.exibirMsg(
            `${this.nome} ataca com esfera o personagem ${persona.nome}`
          );
          dano = 30;
          this.setImg(magoA2_default);
          break;
        case 2:
          this.exibirMsg(
            `${this.nome} ataca com criastal o personagem ${persona.nome}`
          );
          dano = 40;
          this.setImg(magoA3_default);
          break;
      }
      persona.alterarImgSofrerAtaque();
      persona.receberDano(dano);
      if (this.vida < 150) {
        this.regenerar(10);
      }
    }
  };

  // src/jogo.ts
  var jogo = class {
    async inicial(player1, player2) {
      let turno = 1;
      this.atualizarInterface(player1, player2);
      while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
        player1.exibirMsg(
          "\n =================  turno " + turno + "  ==================="
        );
        player1.atacar(player2);
        this.attImg(player1, player2);
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
    buscaComponenteHTML(id) {
      return document.getElementById(id);
    }
    attImg(jogadorUm, jogadorDois) {
      this.buscaComponenteHTML("imgJogadorUm").src = jogadorUm.getImg();
      this.buscaComponenteHTML("imgJogadorDois").src = jogadorDois.getImg();
    }
    atualizarInterface(jogadorUm, jogadorDois) {
      this.buscaComponenteHTML("saudeUm").textContent = "\u{1D58D}\u{1D595}: " + jogadorUm.getVida();
      this.buscaComponenteHTML("saudeDois").textContent = "\u{1D58D}\u{1D595}: " + jogadorDois.getVida();
      this.buscaComponenteHTML("playerDoisPorcentagem").style.width = jogadorDois.getVida() * 100 / jogadorDois.vidaMax + "%";
      this.buscaComponenteHTML("playerUmPorcentagem").style.width = jogadorUm.getVida() * 100 / jogadorUm.vidaMax + "%";
      this.buscaComponenteHTML("nomeUm").textContent = jogadorUm.nome;
      this.buscaComponenteHTML("nomeDois").textContent = jogadorDois.nome;
    }
    esperaTempo(tempo = 800) {
      return new Promise((X) => setTimeout(X, tempo));
    }
  };
  function construirJogo() {
    if (document.iniciouJogo) {
      return;
    }
    document.iniciouJogo = true;
    let mago = new Mago("mago", 200);
    let guerer = new guer("guerreiro", 200);
    let game = new jogo();
    game.inicial(mago, guerer);
  }
  document.getElementById("botaoJogar").addEventListener("click", construirJogo);
})();
