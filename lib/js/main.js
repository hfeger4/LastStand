import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";

// var imageRepository = new function(){
//   this.background = new Image();
//   this.background.src = "imgs/bg.png";
// };


let id;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// const backgroundImage = new Image();
// backgroundImage.src="./lib/css/COOLAF.png";
// const drawbackground = ()=>{ctx.drawImage};
const ship = new Ship(ctx);
const ball = new Ball(ctx);
const bricks = new Bricks(ctx);

class Main{
  constructor(){
    this.ctx = ctx;
    this.speed = 60;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    this.setup();
  }

  mouseMoveHandler(e) {
   let mouseX = e.clientX - canvas.offsetLeft;
   if(mouseX > 0 && mouseX < canvas.width) {
       ship.updateX(mouseX - 150/2);
       ball.updateX(mouseX - 150/2);
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


  // initialize(){
  //   // return setInterval(() => this.setup(),this.speed);
  //
  // }

}

const newGame = new Main(ctx);
newGame.setup();

export default Main;
