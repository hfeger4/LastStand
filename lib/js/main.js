import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Start from "./start";


let id;
let id2;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const ship = new Ship(ctx);
const ball = new Ball(ctx);
const bricks = new Bricks(ctx);

function renderStartScreen(){
  ctx.font = "2em Serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Press Enter to START", 250, 260);
  ctx.fillText("Press 2 for LEVEL 2", 255, 300);
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
   if(mouseX > 75 && mouseX < canvas.width - 75) {
       ship.updateX(mouseX - 75);
       ball.updateX(mouseX - 75);
   }
 }

 setup(){
   ball.draw(ctx);
   ship.draw(ctx);
   id = requestAnimationFrame(this.setup.bind(this));
  }

  pause(){
    cancelAnimationFrame(id);
  }
}



export default Main;
