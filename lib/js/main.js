import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";

// var imageRepository = new function(){
//   this.background = new Image();
//   this.background.src = "bg.png";
// };
//
// function Drawable() {
// 	this.init = function(x, y) {
// 		// Default variables
// 		this.x = x;
// 		this.y = y;
// 	};
// 	this.speed = 0;
// 	this.canvasWidth = 0;
// 	this.canvasHeight = 0;
// 	// Define abstract function to be implemented in child objects
// 	this.draw = function() {
// 	};
// }

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
    document.addEventListener("enter", this.enterHandler, false);
    this.setup();
  }

  enterHandler(e){

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

  pause(){
    cancelAnimationFrame(id);
  }

}

const newGame = new Main(ctx);
newGame.setup();

export default Main;
