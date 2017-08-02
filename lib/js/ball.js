import Main from "./main";
import Ship from "./ship";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Ball{
  constructor(){
    this.ctx = ctx;
    this.x = ctx.canvas.height/2;
    this.y = ctx.canvas.height-30;
    this.r = 10;
    this.dx = 2;
    this.dy = 2;
    this.speed = 60;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;
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

  drawBall(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
    ctx.fillStyle="#BD5727";
    ctx.fill();
    ctx.closePath();
  }

  wallInteraction() {
    if (this.x + this.dx > canvas.width-this.r ||
    this.x + this.dx < this.r)
      this.dx = -this.dx;
    if (this.y + this.dy < this.r){
      this.dy = -this.dy;
    }else if(this.y + this.dy > canvas.height - this.r){
      if(this.x > this.shipX && this.x < this.shipX + this.shipWidth){
        this.dy = -this.dy;
      }else{
        this.dy = -this.dy;
      }
    }

  }

  draw(){
    ctx.clearRect(0, 0 , canvas.width, canvas.height);

    this.drawBall(ctx);
    this.wallInteraction();

    this.x += this.dx;
    this.y += this.dy;
  }

}

export default Ball;
