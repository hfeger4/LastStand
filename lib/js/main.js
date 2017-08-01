const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(300, 300, 20, 0, Math.PI*2, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
