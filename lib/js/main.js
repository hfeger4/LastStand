import Ball from "./ball";
import Ship from "./ship";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Main{
  constructor(){
    this.ctx = ctx;
    this.ball = new Ball(ctx);
    this.ship = new Ship(ctx);
    this.speed = 60;
  }

  setup(){
    this.ball.draw(ctx);
    this.ship.draw(ctx);
  }

  initialize(){
    return setInterval(() => this.setup(),this.speed);
  }

}

const newGame = new Main(ctx);
newGame.initialize();

export default Main;
