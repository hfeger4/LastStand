import Main from "./main";
import Ship from "./ship";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Ball{
  constructor(){
    //Ball Logic
    this.ctx = ctx;
    this.x = ctx.canvas.height/2;
    this.y = ctx.canvas.height-30;
    this.r = 10;
    this.dx = 2;
    this.dy = -2;
    this.speed = 60;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;

    //Brick Logic
    this.topPadding = 30;
    this.leftpadding = 43;
    this.brickRow = 4;
    this.brickCol = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 12;
    this.bricks = [];
    this.createBricks();
  }

  updateX(x) {
   this.shipX = x;
   }

  clear(){
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha=1;
  }

  initialize(){
    return setInterval(() => this.draw(ctx),this.speed);
  }

  createBricks(){
    for(let a = 0; a < this.brickCol; a++) {
      this.bricks[a] = [];
    for(let b = 0; b < this.brickRow; b++) {
        this.bricks[a][b] = { x: 0, y: 0, hits: 1 };
    }
   }
  }

  drawBall(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
    ctx.fillStyle="#E09315";
    ctx.fill();
    ctx.closePath();
  }

  drawBricks(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = "#157DE0";
    ctx.fill();
    ctx.closePath();
  }

  brickCollision(){
    for(let a = 0; a < this.brickCol; a++){
      for(let b = 0; b < this.brickRow; b++){
        let oneBrick = this.bricks[a][b];
        if (oneBrick.hits > 0) {
          if (this.x > oneBrick.x && this.x < oneBrick.x + this.brickWidth && this.y < oneBrick.y + this.brickHeight){
              this.dy = -this.dy;
              oneBrick.hits -= 1;
            }
          }
        }
      }
    }

  wallInteraction() {
    if (this.x + this.dx > canvas.width-this.r ||
    this.x + this.dx < this.r)
      this.dx = -this.dx;
    if (this.y + this.dy < this.r){
      this.dy = -this.dy;
    }else if(this.y + this.dy > canvas.height - this.r){
      if(this.x > this.shipX &&
        this.x < this.shipX + this.shipWidth){
        this.dy = -this.dy;
      }else{
        this.dy = -this.dy;
      }
    }

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

  draw(){
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    this.drawBall(ctx);
    this.renderDrawBricks(ctx);
    this.wallInteraction();
    this.brickCollision();
    // this.checkGameStatus();

    this.x += this.dx;
    this.y += this.dy;
  }

  // checkGameStatus(){
  //   if (){
  //     this.ctx.fillText("You Won!", 420, 350);
  //   }
  // }
}

export default Ball;
