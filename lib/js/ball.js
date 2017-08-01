class Ball{
  constructor(ctx){
    this.x = canvas.height/2;
    this.y = canvas.height-30;
    this.r = 15;
    this.dx = 8;
    this.dy = 8;
    this.WIDTH = 500;
    this.HEIGHT = 600;
    this.speed = 60;
  }

  clear(){
    ctx.globalAlpha =0.3;
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
    ctx.globalAlpha=1;
  }

  initialize(){
    return setInterval(draw,speed);
  }

  drawBall(x,y,r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle="#006699";
    ctx.fill();
  }

  wallInteraction() {
    if (x + dx + r > WIDTH || x + dx - r < 0)
      dx = -dx;
    if (y + dy + r > HEIGHT || y + dy - r < 0)
      dy = -dy;
  }

  draw(){
    clear();
    drawBall(x, y, r);
    wallInteraction();

    x += dx;
    y += dy;
  }

}

initialize();

export default Ball;
