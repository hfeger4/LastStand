import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Main from "./main";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Start{
  constructor(){
    document.addEventListener("keydown", this.startHandler.bind(this), false);
    this.bear = document.getElementById("bear");
  }

  startHandler(e){
    if (e.keyCode === 13){
      const newGame = new Main(ctx);
      newGame.setup();
      // this.bear.play();
    }else if (e.keyCode === 49){
      const newGame2 = new Main(ctx);
      newGame2.setup2();
    }
  }
}

export default Start;
