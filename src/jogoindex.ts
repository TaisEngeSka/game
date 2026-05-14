import { guer } from "./guerreiro.ts";
import { jogo } from "./jogo.ts";
import { Mago } from "./mago.ts";

let mago: Mago = new Mago("𝖒𝖆𝖌𝖔", 200);
let guerer: guer = new guer("𝖌𝖚𝖊𝖗𝖗𝖊𝖎𝖗𝖔", 200);

let game: jogo = new jogo();
game.inicial(mago, guerer);