import Main from './main';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Bricks{
  constructor(){
    //Brick Logic
    this.topPadding = 30;
    this.leftpadding = 43;
    this.brickRow = 4;
    this.brickCol = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 12;
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
            let brickX = (a * (this.brickWidth+this.brickPadding))
            + this.leftpadding;
            let brickY = (b * (this.brickHeight+this.brickPadding))
            + this.topPadding;
            this.bricks[a][b].x = brickX;
            this.bricks[a][b].y = brickY;
            this.drawBricks(brickX, brickY, this.brickWidth, this.brickHeight);
          }
        }
    }
  }
}

export default Bricks;
