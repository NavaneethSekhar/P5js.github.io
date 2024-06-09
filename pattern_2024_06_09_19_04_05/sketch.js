var rows = 20;
var cols = 20;
var distanceX = 30;
var distanceY = 30;

var palette = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#FF69B4"];

function setup() {
  createCanvas(600, 600);
  mousePressed();
}

function mousePressed() {
  background(0);
  rectMode(CENTER);
  noStroke();
  colorMode(RGB);

  for (var r = 1; r < rows; r++) {
    for (var c = 1; c < cols; c++) {
      
      var randomColor = random(palette);
      fill(randomColor);
      
      var size = random(20, 40);
      
      var shape = floor(random(0, 4));
      
      if (shape == 0) {
        ellipse(c * distanceX, r * distanceY, size, size);
      } else if (shape == 1) {
        rect(c * distanceX, r * distanceY, size, size);
      } else if (shape == 2) {
        drawTriangle(c * distanceX, r * distanceY, size);
      } else if (shape == 3) {
        drawDiamond(c * distanceX, r * distanceY, size);
      }
      
    }
  }
}

function drawTriangle(x, y, size) {
  triangle(
    x, y - size / 2,
    x - size / 2, y + size / 2,
    x + size / 2, y + size / 2
  );
}

function drawDiamond(x, y, size) {
  beginShape();
  vertex(x, y - size / 2);  
  vertex(x + size / 2, y); 
  vertex(x, y + size / 2); 
  vertex(x - size / 2, y);
  endShape(CLOSE);
}