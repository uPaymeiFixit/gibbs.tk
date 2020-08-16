/**
 * @author Josh Gibbs (uPaymeiFixit@gmail.com)
 */

const maxSize = 2; // Maximum line width
const minSize = 1; // Minimum line width
const length = 150; // How long the line is before rendering
const quantity = 3; // Number of lines

let lines = [];

let ctx;
window.onload = () => {
  // Set up the canvas to be fullscreen
  ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
  ctx.canvas.ondblclick = ctx.canvas.webkitRequestFullScreen;
  window.onresize = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;   
  };
  window.onresize();

  // Begin animating
  init();
  window.requestAnimationFrame(animate);
}

function init () {
  for (let i = 0; i < quantity; i++) {
    lines.push({
      x_direction: Math.random() < 0.5 ? -1 : 1,
      y_direction: Math.random() < 0.5 ? -1 : 1,
      size: Math.floor(Math.random() * maxSize + minSize),
      x: Math.floor(Math.random() * (ctx.canvas.width)),
      y: Math.floor(Math.random() * (ctx.canvas.height)),
      color: '#' + (Math.random() * (0xFFFFFF + 1) << 0).toString(16)
    });
  }
}

function animate () {
  window.requestAnimationFrame(animate);
  for (let n = 0; n < length; n++) {
    draw();

    lines.forEach(line => {
      line.y += line.y_direction;
      line.x += line.x_direction;

      if (line.x >= ctx.canvas.width) {
        line.x_direction = -1;
      } else if (line.x <= 0) {
        line.x_direction = 1;
      }

      if (line.y >= ctx.canvas.height) {
        line.y_direction = -1;
      } else if (line.y <= 0) {
        line.y_direction = 1;
      }
    });
  }
}

function draw () {
  lines.forEach(line => {
    ctx.fillStyle = line.color;
    ctx.beginPath();
    ctx.arc(line.x, line.y, line.size, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  })
}
