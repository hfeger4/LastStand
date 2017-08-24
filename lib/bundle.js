/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bricks__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start__ = __webpack_require__(4);






let id;
let id2;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const ship = new __WEBPACK_IMPORTED_MODULE_1__ship__["a" /* default */](ctx);
const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */](ctx);
const bricks = new __WEBPACK_IMPORTED_MODULE_2__bricks__["a" /* default */](ctx);

function renderStartScreen(){
  ctx.font = "2em Serif";
  ctx.fillStyle = "#FFFFFF";
  // ctx.fillStyle = "#000000";
  ctx.fillText("Press Enter to START", 250, 260);
  ctx.fillText("Press 2 for LEVEL 2", 255, 300);
}

document.addEventListener("DOMContentLoaded", function(event) {
    new __WEBPACK_IMPORTED_MODULE_3__start__["a" /* default */]();
    renderStartScreen();
  });

class Main{
  constructor(){
    this.ctx = ctx;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.addEventListener("keydown", this.enterHandler, false);
    this.setup();
  }

  mouseMoveHandler(e) {
   let mouseX = e.clientX - canvas.offsetLeft;
   if(mouseX > 0 && mouseX < canvas.width) {
       ship.updateX(mouseX - 75);
       ball.updateX(mouseX - 75);
   }
 }

 setup(){
   ball.draw(ctx);
   ship.draw(ctx);
   id = requestAnimationFrame(this.setup.bind(this));
  }

  pause(){
    cancelAnimationFrame(id);
  }
}



/* harmony default export */ __webpack_exports__["default"] = (Main);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(0);


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Ship{
  constructor(){
    this.ctx = ctx;
    this.x = ctx.canvas.height;
    this.y = ctx.canvas.height-30;
    this.shipHeight = 10;
    this.shipWidth = 150;
    this.shipX = (this.x - this.shipWidth)/2;
  }

  updateX(x) {
   this.shipX = x;
   }

  renderShip(){
    ctx.beginPath();
    ctx.rect(this.shipX,
             this.x-this.shipHeight,
             this.shipWidth,
             this.shipHeight);
    ctx.fillStyle = "#900094";
    ctx.fill();
    ctx.closePath();
  }

  draw(){
    this.renderShip();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Ship);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(0);


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Bricks{
  constructor(){
    this.brickRow = 4;
    this.brickCol = 8;
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.bricks = [];
  }

  drawBricks(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = "#157DE0";
    ctx.fill();
    ctx.closePath();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bricks);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(1);



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
    this.r = 8;
    this.directionX = 1;
    this.directionY = -1;
    this.shipWidth = 150;
    this.shipX = (this.ballX - this.shipWidth)/2;
    document.addEventListener("keydown",
    this.difficultyMoveHandler.bind(this), false);
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.bricks = [];
    this.createBricks();
    this.score = 0;
    this.renderEndScreen.bind(this);
    this.renderWinScreen.bind(this);
    this.ballX = ctx.canvas.height/2;
    this.ballY = ctx.canvas.height-20;
  }

  difficultyMoveHandler(e){
    if (e.keyCode === 71){ //g
      this.directionX = 1;
      this.directionY = -1;
    }
    if (e.keyCode === 72){ //h
      this.directionX = 2;
      this.directionY = -2;
    }
    if (e.keyCode === 74){ //j
      this.directionX = 3;
      this.directionY = -3;
    }
  }

  updateX(x) {
   this.shipX = x;
   }

   wallInteraction() {
     if (this.ballX + this.directionX > canvas.width-this.r)
        this.xBounce();
     if (this.ballX + this.directionX < this.r)
         this.xBounce();
     if (this.ballY + this.directionY < this.r){
         this.yBounce();
     }else if(this.ballY + this.directionY > canvas.height - this.r){
       if(this.ballX > this.shipX &&
         this.ballX < this.shipX + this.shipWidth){
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
     this.shipX = (this.ballX - this.shipWidth)/2;
     this.ballX = ctx.canvas.height/2;
     this.ballX = ctx.canvas.height-20;
   }

   drawScore() {
    ctx.font = "2em Serif";
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
    for(let a = 0; a < 8; a++) {
      this.bricks[a] = [];
    for(let b = 0; b < 4; b++) {
        this.bricks[a][b] = {
        x: 0, y: 0,
        hits: Math.floor((Math.random() * 3) + 1)};
    }
   }
  }

  drawBall(){
    ctx.beginPath();
    ctx.arc(this.ballX,this.ballY,this.r,0,Math.PI * 2);
    ctx.fillStyle="#E209E8";
    ctx.fill();
    ctx.closePath();
  }

  drawBricks(brick,ballX,ballY,width,height){
    ctx.beginPath();
    ctx.rect(ballX,ballY,width,height);
    if (brick.hits === 2){ ctx.fillStyle = "#157DE0";} //blue
    if (brick.hits === 3){ ctx.fillStyle = "#7A07BB";} //purple
    if (brick.hits === 1){ ctx.fillStyle = "#BB0D07";} //red
    ctx.fill();
    ctx.closePath();
  }

  renderEndScreen(){
    ctx.font = "3em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Game Over", 285, 270);
  }

  renderWinScreen(){
    ctx.font = "2em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("You Win!", 310, 270);
  }

  brickCollision(){
  let allBricks = this.bricks.myFlatten();
  allBricks.forEach(oneBrick => {
    if (oneBrick.hits > 0){
      if (this.ballY >= oneBrick.y &&
          this.ballX >= oneBrick.x &&
          this.ballY <= oneBrick.y + this.brickHeight &&
          this.ballX <= oneBrick.x + this.brickWidth){
            this.yBounce();
            this.score += 1;
            oneBrick.hits -= 1;
            let everyBrick = this.bricks.myFlatten();
            if (everyBrick.every(x => x.hits === 0)){
              alert("You Win! Press Enter to Continue");
              document.location.reload();
            }
          }
    }
  });
}

  yBounce(){
    this.directionY = -this.directionY;
  }

  xBounce(){
    this.directionX = -this.directionX;
  }

  renderDrawBricks() {
    for(let a = 0; a < 8; a++) {
        for(let b = 0; b < 4; b++) {
          let oneBrick = this.bricks[a][b];
          if(oneBrick.hits > 0){
            let brickXPos = (a * (90)) + 43;
            let brickYPos = (b * (30)) + 70;
            oneBrick.x = brickXPos;
            oneBrick.y = brickYPos;
            this.drawBricks(this.bricks[a][b],
              brickXPos,brickYPos,
              this.brickWidth,this.brickHeight);
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
    this.ballX += this.directionX;
    this.ballY += this.directionY;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bricks__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ball2__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main2__ = __webpack_require__(6);







const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Start{
  constructor(){
    document.addEventListener("keydown", this.startHandler.bind(this), false);
    this.bear = document.getElementById("bear");
  }

  startHandler(e){
    if (e.keyCode === 13){
      const newGame = new __WEBPACK_IMPORTED_MODULE_3__main__["default"](ctx);
      newGame.setup();
      // this.bear.play();
    }
    if (e.keyCode === 50){
      const newGame2 = new __WEBPACK_IMPORTED_MODULE_5__main2__["a" /* default */](ctx);
      newGame2.setup2();
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Start);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(1);



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

class Ball2{
  constructor(){
    this.ctx = ctx;
    this.r = 8;
    this.directionX = 2;
    this.directionY = -2;
    this.shipWidth = 150;
    this.shipX = (this.ballX - this.shipWidth)/2;
    document.addEventListener("keydown",
    this.difficultyMoveHandler.bind(this), false);
    this.brickWidth = 80;
    this.brickHeight = 20;
    this.bricks = [];
    this.createBricks();
    this.score = 0;
    this.renderEndScreen.bind(this);
    this.renderWinScreen.bind(this);
    this.ballX = ctx.canvas.height/2;
    this.ballY = ctx.canvas.height-20;
  }

  difficultyMoveHandler(e){
    if (e.keyCode === 71){ //g
      this.directionX = 1;
      this.directionY = -1;
    }
    if (e.keyCode === 72){ //h
      this.directionX = 2;
      this.directionY = -2;
    }
    if (e.keyCode === 74){ //j
      this.directionX = 3;
      this.directionY = -3;
    }
  }

  updateX(x) {
   this.shipX = x;
   }

   wallInteraction() {
     if (this.ballX + this.directionX > canvas.width-this.r)
        this.xBounce();
     if (this.ballX + this.directionX < this.r)
         this.xBounce();
     if (this.ballY + this.directionY < this.r){
         this.yBounce();
     }else if(this.ballY + this.directionY > canvas.height - this.r){
       if(this.ballX > this.shipX &&
         this.ballX < this.shipX + this.shipWidth){
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
     this.shipX = (this.ballX - this.shipWidth)/2;
     this.ballX = ctx.canvas.height/2;
     this.ballX = ctx.canvas.height-20;
   }

   drawScore() {
    ctx.font = "2em Serif";
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
    for(let a = 0; a < 8; a++) {
      this.bricks[a] = [];
    for(let b = 0; b < 6; b++) {
        this.bricks[a][b] = {
        x: 0, y: 0,
        hits: Math.floor((Math.random() * 3) + 1)};
    }
   }
  }

  drawBall(){
    ctx.beginPath();
    ctx.arc(this.ballX,this.ballY,this.r,0,Math.PI * 2);
    ctx.fillStyle="#E209E8";
    ctx.fill();
    ctx.closePath();
  }

  drawBricks(brick,ballX,ballY,width,height){
    ctx.beginPath();
    ctx.rect(ballX,ballY,width,height);
    if (brick.hits === 2){ ctx.fillStyle = "#157DE0";} //blue
    if (brick.hits === 3){ ctx.fillStyle = "#7A07BB";} //purple
    if (brick.hits === 1){ ctx.fillStyle = "#BB0D07";} //red
    ctx.fill();
    ctx.closePath();
  }

  renderEndScreen(){
    ctx.font = "3em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Game Over", 285, 270);
  }

  renderWinScreen(){
    ctx.font = "2em Serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("You Win!", 310, 270);
  }

  brickCollision(){
  let allBricks = this.bricks.myFlatten();
  allBricks.forEach(oneBrick => {
    if (oneBrick.hits > 0){
      if (this.ballY >= oneBrick.y &&
          this.ballX >= oneBrick.x &&
          this.ballY <= oneBrick.y + this.brickHeight &&
          this.ballX <= oneBrick.x + this.brickWidth){
            this.yBounce();
            this.score += 1;
            oneBrick.hits -= 1;
            let everyBrick = this.bricks.myFlatten();
            if (everyBrick.every(x => x.hits === 0)){
              alert("You Win! Press Enter to Continue");
              document.location.reload();
            }
          }
    }
  });
}

  yBounce(){
    this.directionY = -this.directionY;
  }

  xBounce(){
    this.directionX = -this.directionX;
  }

  renderDrawBricks() {
    for(let a = 0; a < 8; a++) {
        for(let b = 0; b < 6; b++) {
          let oneBrick = this.bricks[a][b];
          if(oneBrick.hits > 0){
            let brickXPos = (a * (90)) + 43;
            let brickYPos = (b * (30)) + 70;
            oneBrick.x = brickXPos;
            oneBrick.y = brickYPos;
            this.drawBricks(this.bricks[a][b],
              brickXPos,brickYPos,
              this.brickWidth,this.brickHeight);
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
    this.ballX += this.directionX;
    this.ballY += this.directionY;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Ball2);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ship__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bricks__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ball2__ = __webpack_require__(5);







let id;
let id2;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const ship = new __WEBPACK_IMPORTED_MODULE_0__ship__["a" /* default */](ctx);
const bricks = new __WEBPACK_IMPORTED_MODULE_1__bricks__["a" /* default */](ctx);
const ball2 = new __WEBPACK_IMPORTED_MODULE_3__ball2__["a" /* default */](ctx);

function renderStartScreen(){
  ctx.font = "2em Serif";
  ctx.fillStyle = "#FFFFFF";
  // ctx.fillStyle = "#000000";
  ctx.fillText("Press Enter to START", 250, 260);
}

document.addEventListener("DOMContentLoaded", function(event) {
    new __WEBPACK_IMPORTED_MODULE_2__start__["a" /* default */]();
    renderStartScreen();
  });

class Main2{
  constructor(){
    this.ctx = ctx;
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.addEventListener("keydown", this.enterHandler, false);
    this.setup2();
  }

  mouseMoveHandler(e) {
   let mouseX = e.clientX - canvas.offsetLeft;
   if(mouseX > 0 && mouseX < canvas.width) {
       ship.updateX(mouseX - 75);
       ball2.updateX(mouseX - 75);
   }
 }

  setup2(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ball2.draw(ctx);
    ship.draw(ctx);
    id2 = requestAnimationFrame(this.setup2.bind(this));
  }

  pause(){
    cancelAnimationFrame(id);
  }
}



/* harmony default export */ __webpack_exports__["a"] = (Main2);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map