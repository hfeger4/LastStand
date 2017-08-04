import Main from './main';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Bricks{
  constructor(){
    this.brickRow = 4;
    this.brickCol = 8;
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.topPadding = 70;
    this.leftpadding = 43;
    this.bricks = [];
  }

  drawBricks(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = "#157DE0";
    ctx.fill();
    ctx.closePath();
  }
}

export default Bricks;
