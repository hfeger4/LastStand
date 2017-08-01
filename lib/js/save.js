const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.height/2;
let y = canvas.height-30;
let r = 15;
let dx = 8;
let dy = 8;
let WIDTH = 500;
let HEIGHT = 600;
let speed = 60;


function clear(){
  ctx.globalAlpha =0.3;
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0,0,WIDTH,HEIGHT);
  ctx.globalAlpha=1;
}

function initialize(){
  return setInterval(draw,speed);
}

function drawBall(x,y,r){
  ctx.beginPath();
  ctx.arc(x,y,r,0,Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle="#006699";
  ctx.fill();
}

function wallInteraction() {
  if (x + dx + r > WIDTH || x + dx - r < 0)
    dx = -dx;
  if (y + dy + r > HEIGHT || y + dy - r < 0)
    dy = -dy;
}

function draw(){
  clear();
  drawBall(x, y, r);
  wallInteraction();

  x += dx;
  y += dy;
}



initialize();
