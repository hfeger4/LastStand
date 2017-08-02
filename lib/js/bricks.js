import Main from './main';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Bricks{
  constructor(){
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
  }

  draw() {
    for(var c=0; c<this.brickColumnCount; c++) {
        for(var r=0; r<this.brickRowCount; r++) {
            var brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            var brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            // this.bricks[c][r].x = brickX;
            // this.bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
            ctx.fillStyle = "#0157BB";
            ctx.fill();
            ctx.closePath();
        }
    }
  }
}

export default Bricks;
