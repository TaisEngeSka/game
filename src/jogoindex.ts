
import {guer} from "./guerreiro.ts"
import { jogo } from "./jogo.ts";
import { Mago } from "./mago.ts";

let mago: Mago = new Mago ("mago", 10, 200, 15, 20);
let guerer: guer = new guer ("guerreiro", 10, 200, 15, 20);

let game: jogo = new jogo();
game.inicial(mago,guerer);

