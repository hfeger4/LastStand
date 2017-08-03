import Ball from "./ball";
import Ship from "./ship";
import Bricks from "./bricks";
import Main from "./main";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Start{
  constructor(){
    document.addEventListener("keydown", this.startHandler.bind(this), false);
  }

  startHandler(e){
    if (e.keyCode === 13){
      const newGame = new Main(ctx);
      newGame.setup();
    }
  }
}

export default Start;
