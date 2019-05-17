//var xoff = 0;
//var yoff = 0;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(1400, 1600);
  frameRate(10);
}

function draw() {
  background (128, 140, 155);

  fill(209, 209, 209);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x+=6) {
    noStroke();
    var n = map(noise(xoff), 0, 1, 0, height/1.7);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s+n;
    text("dirigible", x, y);
    textSize(20);

    xoff += 0.02;
  }
  endShape();

  fill(255, 128, 43);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x+=4) {
    noStroke();
    var n = map(noise(xoff), 0, 1, 0, height/1.7);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s+n;
    text("lunatic", x, y+200);

    xoff += 0.03;
  }
  endShape();

  fill(216, 183, 145);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x+=8) {
    noStroke();
    var n = map(noise(xoff), 0, 1, 0, height/1.7);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s+n;
    text("girl with puma", x, y+400);

    xoff += 0.03;
  }
  endShape();

  fill(118, 197, 219);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x+=3) {
    noStroke();
    var n = map(noise(xoff), 0, 1, 0, height/1.7);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s+n;
    text("tattoo artist", x, y+600);

    xoff += 0.03;
  }
  endShape();

  fill(214, 0, 74);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x+=9) {
    noStroke();
    var n = map(noise(xoff), 0, 1, 0, height/1.7);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s+n;
    text("fat woman fanning herself", x, y+800);

    xoff += 0.03;
  }
  endShape();

  start += inc;
}
