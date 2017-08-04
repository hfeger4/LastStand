import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Main from "./main";
import Ball2 from "./ball2";
import Main2 from "./main2";

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
    }
    if (e.keyCode === 50){
      const newGame2 = new Main2(ctx);
      newGame2.setup2();
    }
  }
}

export default Start;
