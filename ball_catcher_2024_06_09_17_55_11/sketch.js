let basket;
let objects = [];
let gameState = "title"; // Game states: title, play
let startButton;
let bg;
let catchCount = 0;

function preload() {
  bg = loadImage('game background.jpg'); // Loads background image
}

function setup() {
  createCanvas(400, 400);
  basket = new Basket();
  startButton = createButton('Start');
  startButton.position((width / 2) - 30, (height / 2) + 10);
  startButton.style('border-radius', '12px'); // adds Rounded edges
  startButton.style('padding', '10px 20px');  // adds Padding
  startButton.style('font-size', '16px');     // Font size
  startButton.mousePressed(startGame);
}

function draw() {
  if (gameState === "title") {
    drawTitleScreen();
  } else if (gameState === "play") {
    drawGameScreen();
  }
}

function drawTitleScreen() {
  stroke(0)
  image(bg, 0, 0, width, height); // Displays background image
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text("Ball Catcher", width / 2, height / 2 - 40);
}

function drawGameScreen() {
  background(220); // Clears the screen each frame

  basket.display();
  basket.move(mouseX);
  
  if (frameCount % 60 === 0) {
    objects.push(new FallingObject());
  }
  
  for (let i = objects.length - 1; i >= 0; i--) {
    objects[i].fall();
    objects[i].display();
    if (objects[i].caughtBy(basket)) {
      objects.splice(i, 1);
      catchCount++;
    } else if (objects[i].offScreen()) {
      objects.splice(i, 1);
    }
  }
  
  fill(0);
  textSize(16);
  text(`Caught: ${catchCount}`, 10, 20); // Displays catch count
}

function startGame() {
  gameState = "play";
  startButton.hide();
}

class Basket {
  constructor() {
    this.width = 50;
    this.height = 20;
    this.x = width / 2;
    this.y = height - this.height;
  }
  
  display() {
    fill(0);
    rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }
  
  move(x) {
    this.x = constrain(x, this.width / 2, width - this.width / 2);
  }
}

class FallingObject {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 20;
    this.speed = 3;
  }
  
  fall() {
    this.y += this.speed;
  }
  
  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
  
  caughtBy(basket) {
    let d = dist(this.x, this.y, basket.x, basket.y);
    return d < this.size / 2 + basket.width / 2;
  }
  
  offScreen() {
    return this.y > height + this.size / 2;
  }
}