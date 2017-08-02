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
    this.brickPadding = 10;
    this.bricks = [];
      for(let a = 0; a < this.brickCol; a++) {
        this.bricks[a] = [];
      for(let b = 0; b < this.brickRow; b++) {
          this.bricks[a][b] = { x: 0, y: 0, hits: 1 };
      }
    }
  }

  drawBricks() {
    for(let a = 0; a < this.brickCol; a++) {
        for(let b = 0; b < this.brickRow; b++) {
          if((this.bricks[a][b]).hits === 1){
            let brickX = (a * (this.brickWidth+this.brickPadding))
            + this.leftpadding;
            let brickY = (b * (this.brickHeight+this.brickPadding))
            + this.topPadding;
            this.bricks[a][b].x = brickX;
            this.bricks[a][b].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
            ctx.fillStyle = "#0157BB";
            ctx.fill();
            ctx.closePath();
          }
        }
    }
  }

  collisionDetection(){
    for(let a = 0; a < this.brickCol; a++){
      for(let b = 0; b < this.brickRow; b++){
        let oneBrick = this.bricks[a][b];
        if (oneBrick.hits === 1) {
        if (this.x > oneBrick.x &&
            this.x < oneBrick.x + this.brickWidth &&
            this.y > oneBrick.y + this.brickHeight)
            this.dy = -this.dy;
          }
        }
      }
    }

  draw(){
    this.drawBricks();
    this.collisionDetection();
  }

}

export default Bricks;
