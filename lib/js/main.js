import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Start from "./start";

let id;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const ship = new Ship(ctx);
const ball = new Ball(ctx);
const bricks = new Bricks(ctx);

document.addEventListener("DOMContentLoaded", function(event) {
    new Start();
  });

class Main{
  constructor(){
    this.ctx = ctx;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.addEventListener("keydown", this.enterHandler, false);
    this.setup();
  }

  // enterHandler(e){
  //   if (e.keyCode === ){
  //     alert("Game Paused");
  //   }

  // }

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

  pause(){
    cancelAnimationFrame(id);
  }
}



export default Main;
