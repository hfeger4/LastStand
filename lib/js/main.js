import Ball from "./ball";
import Ship from "./ship";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ship = new Ship(ctx);

class Main{
  constructor(){
    this.ctx = ctx;
    this.ball = new Ball(ctx);
    this.speed = 60;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);

  }

  mouseMoveHandler(e) {
   let mouseX = e.clientX - canvas.offsetLeft;
   if(mouseX > 0 && mouseX < canvas.width) {
       ship.updateX(mouseX - 150/2);
   }
   console.log(this.shipX);
 }

 setup(){
   this.ball.draw(ctx);
   ship.draw(ctx);
  }


  initialize(){
    return setInterval(() => this.setup(),this.speed);
  }

}

const newGame = new Main(ctx);
newGame.initialize();

export default Main;
