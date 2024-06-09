let x = 100;
let y = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mouseIsPressed) {
    let a = random(0, 255);
    let b = random(0, 255);
    let c = random(0, 255);
    fill(a, b, c, 50);
    y = y + 0.2;
    rect(mouseX - y / 2, mouseY - y / 2, y, y);
  } else {
    x = x + 0.5;
    let a1 = random(0, 255);
    let b1 = random(0, 255);
    let c1 = random(0, 255);
    fill(a1, b1, c1, 50);
    drawDiamond(mouseX, mouseY, x);
  }
}

function drawDiamond(cx, cy, size) {
  let halfSize = size / 2;
  quad(cx, cy - halfSize,  // Top vertex
       cx + halfSize, cy,   // Right vertex
       cx, cy + halfSize,  // Bottom vertex
       cx - halfSize, cy); // Left vertex
}