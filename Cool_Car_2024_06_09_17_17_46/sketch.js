function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Car's body
  fill(0, 0, 250);
  rect(50, 200, 300, 50);  // Main body
  
  // Top part of the car with windows
  fill(135, 232, 255);  // Window color
  beginShape();
  vertex(100, 150);
  vertex(300, 150);
  vertex(340, 200);
  vertex(60, 200);
  endShape(CLOSE);
  
  // Separating the windows
  fill(0, 0, 250);  // Car color
  rect(150, 150, 10, 50);  // Vertical separator
  rect(240, 150, 10, 50);  // Vertical separator
  rect(100, 190, 200, 10);  // Horizontal separator

  // Wheels
  fill(0);
  ellipse(120, 250, 60, 60);
  ellipse(280, 250, 60, 60);
  fill(100);
  ellipse(120, 250, 20, 20);
  ellipse(280, 250, 20, 20);
  
  // Headlights and taillights
  fill(245, 255, 87);
  ellipse(50, 225, 20, 20);  // Left headlight
  ellipse(350, 225, 20, 20); // Right headlight
  fill(255, 4, 4);
  ellipse(50, 250, 20, 20);  // Left taillight
  ellipse(350, 250, 20, 20); // Right taillight
}