import Main from "./main";

class Ball{
  constructor(ctx){
    this.ctx = ctx;
    this.x = ctx.canvas.height/2;
    this.y = ctx.canvas.height-30;
    this.r = 15;
    this.dx = 10;
    this.dy = 10;
    this.WIDTH = 500;
    this.HEIGHT = 600;
    this.speed = 60;
  }

  clear(ctx){
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,this.WIDTH,this.HEIGHT);
    ctx.globalAlpha=1;
  }

  initialize(ctx){
    return setInterval(() => this.draw(ctx),this.speed);
  }

  drawBall(ctx){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle="#006699";
    ctx.fill();
  }

  wallInteraction() {
    if (this.x + this.dx + this.r > this.WIDTH || this.x + this.dx - this.r < 0)
      this.dx = -this.dx;
    if (this.y + this.dy + this.r > this.HEIGHT || this.y + this.dy - this.r < 0)
      this.dy = -this.dy;
  }

  draw(ctx){
    this.clear(ctx);
    this.drawBall(ctx);
    this.wallInteraction();

    this.x += this.dx;
    this.y += this.dy;
  }

}

export default Ball;
