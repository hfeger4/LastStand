import Main from './main';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Ship{
  constructor(){
    this.ctx = ctx;
    this.x = ctx.canvas.height;
    this.y = ctx.canvas.height-30;
    this.shipHeight = 10;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;
  }

  updateX(x) {
   this.shipX = x;
   }

  renderShip(){
    ctx.beginPath();
    ctx.rect(this.shipX,
             this.x - this.shipHeight,
             this.shipWidth,
             this.shipHeight);
    ctx.fillStyle = "#900094";
    ctx.fill();
    ctx.closePath();
  }

  draw(){
    this.renderShip();
  }

}

export default Ship;
