import Main from './main';


class Ship{
  constructor(ctx){
    this.ctx = ctx;
    this.x = ctx.canvas.height;
    this.y = ctx.canvas.height-30;
    this.shipHeight = 10;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;
  }

  drawShip(ctx){
    ctx.beginPath();
    ctx.rect(this.shipX, this.x-this.shipHeight, this.shipWidth, this.shipHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  draw(ctx){
    this.drawShip(ctx);

  }

  initialize(ctx){
    return setInterval(() => this.draw(ctx),this.speed);
  }
}

export default Ship;
