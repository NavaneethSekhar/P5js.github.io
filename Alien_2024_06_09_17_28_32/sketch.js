function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Alien's body
  fill(330, 265, 0);  // color for the alien
  ellipse(200, 250, 150, 200);  // Main body
  
  // Alien's head
  ellipse(200, 150, 220, 150);  // Head
  
  // Alien's eyes
  fill(255);  // color for the eyes
  ellipse(170, 130, 40, 60);  // Left eye
  ellipse(230, 130, 40, 60);  // Right eye
  fill(0);  // color for the pupils
  ellipse(170, 130, 10, 10);  // Left pupil
  ellipse(230, 130, 10, 10);  // Right pupil
  
  // Alien's mouth
  fill(255, 0, 0);  // color for the mouth
  arc(200, 180, 80, 50, 0, PI);  // Mouth
  
  // Alien's antennae
  stroke(0, 265, 0);  // color for the antennae
  strokeWeight(5);
  line(170, 70, 150, 30);  // Left antenna
  line(230, 70, 250, 30);  // Right antenna
  fill(330, 255, 0);  // color for the antenna tips
  ellipse(150, 30, 30, 20);  // Left antenna tip
  ellipse(250, 30, 30, 20);  // Right antenna tip
  
  // Alien's arms
  stroke(0, 265, 0);  // color for the outline
  strokeWeight(10);
  line(125, 250, 75, 300);  // Left arm
  line(275, 250, 325, 300);  // Right arm
  
  // Alien's legs
  line(175, 350, 150, 400);  // Left leg
  line(225, 350, 250, 400);  // Right leg
  
  // Alien's hands
  fill(330, 255, 0);  // color for the hands
  ellipse(75, 300, 30, 20);  // Left hand
  ellipse(325, 300, 30, 20);  // Right hand
  
  // Alien's feet
  ellipse(150, 400, 30, 20);  // Left foot
  ellipse(250, 400, 30, 20);  // Right foot
}