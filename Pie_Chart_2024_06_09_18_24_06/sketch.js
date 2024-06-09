let table;
let data = [];
let totalPower = 0;

function preload() {
  table = loadTable('stands.csv', 'csv', 'header'); // Load the CSV file
}

function setup() {
  createCanvas(400, 400);
  processData();
}

function processData() {
  for (let i = 0; i < table.getRowCount(); i++) {
    let stand = table.getString(i, 'Stand');
    let powerLevel = table.getNum(i, 'PowerLevel');
    data.push({ stand, powerLevel });
    totalPower += powerLevel;
  }
}

function draw() {
  background(220);
  drawPieChart(data);
}

function drawPieChart(data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let stand = data[i].stand;
    let powerLevel = data[i].powerLevel;
    let angle = (powerLevel / totalPower) * TWO_PI;

    fill(random(250), random(250), random(250));
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + angle);
    lastAngle += angle;
    
    
    let labelAngle = lastAngle - angle / 2;
    let labelX = width / 2 + cos(labelAngle) * 150;
    let labelY = height / 2 + sin(labelAngle) * 150;
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(stand, labelX, labelY);
  }
}