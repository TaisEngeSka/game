export abstract class personagem {
  public nome: string = "personagem";
  protected vida: number = 0;
  public vidaMax: number = 0;
  protected defesa: number = 0;
  protected imagem: string = "";
  public imagemPadrao: string = "";
  protected imagemTomouDano: string = "";

  constructor(
    nome: string,
    vida: number,
    defesa: number,
    imagem: string,
    imgtomouDano: string,
  ) {
    this.nome = nome;
    this.vida = vida;
    this.defesa = defesa;
    this.imagem = imagem;
    this.imagemPadrao = imagem;
    this.imagemTomouDano = imgtomouDano;
    this.vidaMax = vida;
  }

  isContinuaVivo(): boolean {
    return this.vida > 0;
  }

  getVida() {
    return this.vida;
  }

  getImg() {
    return this.imagem;
  }

  setImg(img: string) {
    this.imagem = img;
  }

  gerarAtaque(): number {
    // vai gerar um número aleatório entre 0 e 3
    let maximoAtk = 3;
    return Math.floor(Math.random() * maximoAtk);
  }

  public abstract atacar(persona: personagem): void;

  receberDano(dano: number): void {
    this.vida -= dano;

    this.exibirMsg(
      `${this.nome} recebeu ${dano} de dano, Vida atual ${this.vida}`,
    );
  }

  regenerar(extra: number): void {
    this.vida += extra;
    this.exibirMsg(`${this.nome} regenerou ${extra}`);
  }

  public exibirMsg(mensagem: string) {
    document.getElementById("console")!.innerHTML += "<p>" + mensagem + "<p>";
  }

  public alterarImgSofrerAtaque() {
    this.imagem = this.imagemTomouDano;
  }
}
