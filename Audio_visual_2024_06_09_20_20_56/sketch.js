let mic, fft;

function setup() {
  createCanvas(400, 400);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  let waveform = fft.waveform();
  stroke(255);
  strokeWeight(2);
  noFill();

  translate(width / 2, height / 2); 

  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let angle = map(i, 0, waveform.length, 0, TWO_PI);
    let radius = map(waveform[i], -1, 1, 100, 200);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  mic.connect();
}