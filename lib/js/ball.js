import Main from "./main";
import Ship from "./ship";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

Array.prototype.myFlatten = function() {
  let flat = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      flat = flat.concat(this[i].myFlatten());
    } else {
      flat.push(this[i]);
    }
  }
  return flat;

};

class Ball{
  constructor(){
    this.ctx = ctx;
    this.r = 8;
    this.directionX = 1;
    this.directionY = -1;
    this.shipWidth = 150;
    this.shipX = (this.ballX - this.shipWidth)/2;
    document.addEventListener("keydown",
      this.difficultyMoveHandler.bind(this), false);
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.bricks = [];
    this.createBricks();
    this.score = 0;
    this.renderEndScreen.bind(this);
    this.renderWinScreen.bind(this);
    this.ballX = ctx.canvas.height/2;
    this.ballY = ctx.canvas.height-20;
  }

  difficultyMoveHandler(e){
    if (e.keyCode === 71){ //g
      this.directionX = 1;
      this.directionY = -1;
    }
    if (e.keyCode === 72){ //h
      this.directionX = 2;
      this.directionY = -2;
    }
    if (e.keyCode === 74){ //j
      this.directionX = 3;
      this.directionY = -3;
    }
  }

  updateX(x) {
   this.shipX = x;
   }

   restart(){
     setTimeout(document.location.reload(), 3);
   }

   stopMovement(){
     this.directionX = 0;
     this.directionY = 0;
   }

   renderEndScreen(){
     ctx.font = "3em Serif";
     ctx.fillStyle = "#FFFFFF";
     ctx.fillText("Game Over", 285, 270);
   }

   wallInteraction() {
     if (this.ballX + this.directionX > canvas.width-this.r)
        this.xBounce();
     if (this.ballX + this.directionX < this.r)
         this.xBounce();
     if (this.ballY + this.directionY < this.r){
         this.yBounce();
     }else if(this.ballY + this.directionY > canvas.height - this.r){
       if(this.ballX > this.shipX &&
         this.ballX < this.shipX + this.shipWidth){
         this.yBounce();
       }
       else if(this.ballX < canvas.width){
         ctx.font = "3em Serif";
         ctx.fillStyle = "#FFFFFF";
         ctx.fillText("Game Over", 285, 270);
         this.directionX = 0;
         this.directionY = 1;
         setTimeout(function(){document.location.reload();}, 2000);
         // this.yBounce(); //FOR TESTING
       }
     }

   }

   restartGame(){
     this.directionX = 2;
     this.directionY = -2;
     this.shipX = (this.ballX - this.shipWidth)/2;
     this.ballX = ctx.canvas.height/2;
     this.ballX = ctx.canvas.height-20;
   }

   drawScore() {
    ctx.font = "2em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: "+this.score, 340, 50);
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
    for(let a = 0; a < 8; a++) {
      this.bricks[a] = [];
    for(let b = 0; b < 4; b++) {
        this.bricks[a][b] = {
        x: 0, y: 0,
        hits: Math.floor((Math.random() * 3) + 1)};
    }
   }
  }

  drawBall(){
    ctx.beginPath();
    ctx.arc(this.ballX,this.ballY,this.r,0,Math.PI * 2);
    ctx.fillStyle="#E209E8";
    ctx.fill();
    ctx.closePath();
  }

  drawBricks(brick,ballX,ballY,width,height){
    ctx.beginPath();
    ctx.rect(ballX,ballY,width,height);
    if (brick.hits === 2){ ctx.fillStyle = "#157DE0";} //blue
    if (brick.hits === 3){ ctx.fillStyle = "#7A07BB";} //purple
    if (brick.hits === 1){ ctx.fillStyle = "#BB0D07";} //red
    ctx.fill();
    ctx.closePath();
  }

  renderWinScreen(){
    ctx.font = "2em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("You Win!", 310, 270);
  }

  brickCollision(){
  let everyBrick = this.bricks.myFlatten();
  if (everyBrick.every(x => x.hits === 0)){
    ctx.font = "3em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("YOU WIN!", 285, 270);
    this.directionX = 0;
    this.directionY = 0;
    setTimeout(function(){document.location.reload();}, 2000);
    // alert("You Win! Press Enter to Continue");
    // document.location.reload();
  }
  let allBricks = this.bricks.myFlatten();
  allBricks.forEach(oneBrick => {
    if (oneBrick.hits > 0){
      if (this.ballY >= oneBrick.y &&
          this.ballX >= oneBrick.x &&
          this.ballY <= oneBrick.y + this.brickHeight &&
          this.ballX <= oneBrick.x + this.brickWidth){
            this.yBounce();
            this.score += 1;
            oneBrick.hits -= 1;
          }
    }
  });
}

  yBounce(){
    this.directionY = -this.directionY;
  }

  xBounce(){
    this.directionX = -this.directionX;
  }

  renderDrawBricks() {
    for(let a = 0; a < 8; a++) {
        for(let b = 0; b < 4; b++) {
          let oneBrick = this.bricks[a][b];
          if(oneBrick.hits > 0){
            let brickXPos = (a * (90)) + 43;
            let brickYPos = (b * (30)) + 70;
            oneBrick.x = brickXPos;
            oneBrick.y = brickYPos;
            this.drawBricks(this.bricks[a][b],
              brickXPos,brickYPos,
              this.brickWidth,this.brickHeight);
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
    this.drawScore();
    // this.arrowLogic();
    this.ballX += this.directionX;
    this.ballY += this.directionY;
  }
}

export default Ball;
