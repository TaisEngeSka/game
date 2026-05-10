import { guer } from "./guerreiro.ts";
import { jogo } from "./jogo.ts";
import { Mago } from "./mago.ts";

let mago: Mago = new Mago("mago", 200, 200);
let guerer: guer = new guer("guerreiro", 200, 200);

let game: jogo = new jogo();
game.inicial(mago, guerer);