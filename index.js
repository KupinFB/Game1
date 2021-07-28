import { HeroGame } from "./src/Game.js";

const game = new HeroGame();

const map = new HeroGameMap();
map.setSize(8, 8);

map.setTile(0, 0, 'road');
map.setTile(0, 1, 'road');
map.setTile(0, 2, 'road');

map.setObject(0, 1, 'coin');
map.setObject(6, 3, 'coin');

const hero = new HeroGameHero();

map.addHero(hero);

game.setMap(map);


// game.start();

