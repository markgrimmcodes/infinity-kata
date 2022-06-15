function setup() {
  createCanvas(200, 200);
}
let x = 100;
let y = 0;
let velocity = 1;

function mousePressed() {
  velocity = 1;
}
function draw() {
  background(220);
  circle(x, y++, 30);
  if (y > 200) {
    y = 0;
    velocity = velocity + 1;
  }
  y = y + velocity;
}
