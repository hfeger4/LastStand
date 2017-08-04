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

  renderDrawBricks() {
    for(let a = 0; a < this.brickCol; a++) {
        for(let b = 0; b < this.brickRow; b++) {
          if((this.bricks[a][b]).hits > 0){
            let brickXPos = (a * (this.brickWidth+this.brickPadding)) + this.leftpadding;
            let brickYPos = (b * (this.brickHeight+this.brickPadding)) + this.topPadding;
            this.bricks[a][b].x = brickXPos;
            this.bricks[a][b].y = brickYPos;
            this.drawBricks(this.bricks[a][b],brickXPos, brickYPos, this.brickWidth, this.brickHeight);
          }
        }
    }
  }
}

export default Bricks;
