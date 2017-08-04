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
    this.r = 5;
    this.directionX = 2;
    this.directionY = -2;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;
    document.addEventListener("keydown", this.difficultyMoveHandler.bind(this), false);
    this.brickRow = 4;
    this.brickCol = 8;
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.topPadding = 70;
    this.leftpadding = 43;
    this.bricks = [];
    this.createBricks();
    this.score = 0;
    this.renderEndScreen.bind(this);
    this.renderWinScreen.bind(this);
    this.x = ctx.canvas.height/2;
    this.y = ctx.canvas.height-20;
  }

  difficultyMoveHandler(e){
    if (e.keyCode === 71){ //g
      this.directionX = 2;
      this.directionY = -2;
    }
    if (e.keyCode === 72){ //h
      this.directionX = 4;
      this.directionY = -4;
    }
    if (e.keyCode === 74){ //j
      this.directionX = 6;
      this.directionY = -6;
    }
  }

  updateX(x) {
   this.shipX = x;
   }

   wallInteraction() {
     if (this.x + this.directionX > canvas.width-this.r ||
         this.x + this.directionX < this.r)
         this.xBounce();
     if (this.y + this.directionY < this.r){
         this.yBounce();
     }else if(this.y + this.directionY > canvas.height - this.r){
       if(this.x > this.shipX &&
         this.x < this.shipX + this.shipWidth){
         this.yBounce();
       }else{
         this.renderEndScreen();
         setTimeout(function(){document.location.reload(); }, 1500);

         // this.yBounce();

       }
     }

   }

   restartGame(){
     this.directionX = 2;
     this.directionY = -2;
     this.shipX = (this.x - this.shipWidth)/2;
     this.x = ctx.canvas.height/2;
     this.y = ctx.canvas.height-30;
   }

   drawScore() {
    ctx.font = "2em Arial";
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
    for(let a = 0; a < this.brickCol; a++) {
      this.bricks[a] = [];
    for(let b = 0; b < this.brickRow; b++) {
        this.bricks[a][b] = {
        x: 0, y: 0,
        hits: Math.floor((Math.random() * 3) + 1)};
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

  drawBricks(brick,x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    if (brick.hits === 2){ ctx.fillStyle = "#157DE0";} //blue
    if (brick.hits === 3){ ctx.fillStyle = "#7A07BB";} //purple
    if (brick.hits === 1){ ctx.fillStyle = "#BB0D07";} //red
    ctx.fill();
    ctx.closePath();
  }

  renderEndScreen(){
    ctx.font = "3em Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Game Over", 305, 270);
  }

  renderWinScreen(){
    ctx.font = "2em Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("You Win!", 310, 270);
  }

  brickCollision(){
    for(let a = 0; a < this.brickCol; a++){
      for(let b = 0; b < this.brickRow; b++){
        if (this.bricks[a][b].hits > 0) {
          if (this.x >= this.bricks[a][b].x &&
              this.x <= this.bricks[a][b].x + this.brickWidth &&
              this.y <= this.bricks[a][b].y + this.brickHeight &&
              this.y >= this.bricks[a][b].y ){
              this.directionY = -this.directionY;
              this.score++;
              this.bricks[a][b].hits -= 1;
              let allBricks = this.bricks.myFlatten();
              if(allBricks.every(x => x.hits === 0)){
                alert("You win! Press Enter to Continue");
                document.location.reload();
                // this.renderWinScreen();
                // setTimeout(function(){document.location.reload(); }, 1500);
              }
            }
          }
        }
      }
    }

  yBounce(){
    this.directionY = -this.directionY;
  }

  xBounce(){
    this.directionX = -this.directionX;
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

  draw(){
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    this.drawBall(ctx);
    this.renderDrawBricks(ctx);
    this.wallInteraction();
    this.brickCollision();
    this.drawScore();
    this.x += this.directionX;
    this.y += this.directionY;
  }
}

export default Ball;
