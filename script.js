// HTML Canvas

// Canvas Setup
var cnv = document.getElementById(`myCanvas`);
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 500;

// Sky
ctx.fillStyle = `rgb(15, 40, 75)`;
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = `rgb(10, 22, 54)`;
ctx.fillRect(0, 360, 500, 500);
ctx.fillStyle = `rgb(5, 12, 33)`;
ctx.fillRect(0, 385, 500, 500);

// Stars
for (let starCount = 1; starCount <= 100; starCount++) {
  let x = Math.random() * 500;
  let y = Math.random() * 350;

  ctx.fillStyle = `yellow`;
  ctx.beginPath();
  ctx.arc(x, y, 0.5, 0, 2 * Math.PI);
  ctx.fill();
  console.log(x);
}

// Moon
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.arc(425, 80, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = `rgb(15, 40, 75)`;
ctx.beginPath();
ctx.arc(410, 80, 40, 0, 2 * Math.PI);
ctx.fill();

// Ground
ctx.fillStyle = `rgb(64, 36, 1)`;
ctx.fillRect(0, 400, 500, 100);
ctx.fillStyle = `darkgreen`;
ctx.fillRect(0, 400, 500, 50);

// ## House
// Building
ctx.fillStyle = `tan`;
ctx.fillRect(90, 175, 325, 225);
ctx.fillStyle = `rgb(194, 166, 130)`;
ctx.fillRect(90, 175, 325, 30);

// Windows
ctx.lineWidth = 5;
ctx.fillStyle = `steelblue`;
ctx.fillRect(100, 250, 75, 50);
ctx.fillStyle = `black`;
ctx.strokeRect(100, 250, 75, 50);

ctx.fillStyle = `steelblue`;
ctx.fillRect(330, 250, 75, 50);
ctx.fillStyle = `black`;
ctx.strokeRect(330, 250, 75, 50);

// Door
ctx.fillStyle = `saddlebrown`;
ctx.fillRect(225, 299, 50, 100);
ctx.lineWidth = 5;
ctx.fillStyle = `black`;
ctx.strokeRect(225, 299, 50, 100);

// Roof
ctx.fillStyle = `saddlebrown`;
ctx.beginPath();
ctx.moveTo(50, 190);
ctx.lineTo(250, 100);
ctx.lineTo(450, 190);
ctx.moveTo(0, 190);
ctx.fill();

// Trees
let trees = document.getElementById("tree-img");
ctx.drawImage(trees, -25, 155, 250, 250);

// Title
ctx.fillStyle = `white`;
ctx.font = `20px arial`;
ctx.fillText(`Lebron's Crib`, 200, 20);
