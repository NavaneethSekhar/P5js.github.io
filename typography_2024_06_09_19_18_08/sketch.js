var letters = [ 
  [ 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1 ], // N
  [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ], // I
  [ 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1 ], // G
  [ 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0 ], // H
  [ 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0 ], // T
  [ 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0 ], // I
  [ 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0 ], // N
  [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ], // G
  [ 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0 ], // A
  [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0 ], // L
  [ 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0 ]  // E
];

var blockSize = 20; 

function setup() { 
  createCanvas(800, 400); 
  noStroke();
  background(255);
  fill(0); 

  for(var i = 0; i < letters.length; i++) {
    var xPos = 0, yPos = 0;

    for(var j = 0; j < letters[i].length; j++) {
      if(letters[i][j] == 1) { 
        rect(xPos, yPos, blockSize, blockSize);
      } 

      xPos += blockSize; 

      if(j % 4 == 3) {
        xPos = 0;
        yPos += blockSize;
      } 
    }

    // Move to the right after drawing each letter
    translate(blockSize * 6, 0); 
  } 
}