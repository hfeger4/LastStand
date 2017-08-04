import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Start from "./start";
import Ball2 from "./ball2";


let id;
let id2;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const ship = new Ship(ctx);
const ball = new Ball(ctx);
const bricks = new Bricks(ctx);
const ball2 = new Ball2(ctx);

function renderStartScreen(){
  ctx.font = "2em Arial";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Press Enter to START", 250, 260);
}

document.addEventListener("DOMContentLoaded", function(event) {
    new Start();
    renderStartScreen();
  });

class Main{
  constructor(){
    this.ctx = ctx;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.addEventListener("keydown", this.enterHandler, false);
    this.setup();
  }

  mouseMoveHandler(e) {
   let mouseX = e.clientX - canvas.offsetLeft;
   if(mouseX > 0 && mouseX < canvas.width) {
       ship.updateX(mouseX - 75);
       ball.updateX(mouseX - 75);
   }
 }

 setup(){
   ball.draw(ctx);
   ship.draw(ctx);
   id = requestAnimationFrame(this.setup.bind(this));
  }

  setup2(){
    ball2.draw(ctx);
    ship.draw(ctx);
    id2 = requestAnimationFrame(this.setup.bind(this));
  }

  pause(){
    cancelAnimationFrame(id);
  }
}



export default Main;
