function setup() {
  createCanvas(800, 1000);
}

function draw() {
  background('#F3E8EE');
  
  //try again button
  push();
  fill(255);
  strokeWeight(3);
  rectMode(CENTER);
    rect(width/2, 80, 180, 50);
  textSize(30);
  textStyle(BOLD);
  fill(0);
    textAlign(CENTER, CENTER);
    text('Try Again?', width/2, 83);
  pop();
  
  //mountain shadow
  push();
  fill(0);
  beginShape();
    vertex(172, 460);
    vertex(172, 460);
    vertex(258, 242);
    vertex(297, 326);
    vertex(357, 176);
    vertex(405, 276);
    vertex(453, 161);
    vertex(499, 325);
    vertex(561, 251);
    vertex(628, 459);
    vertex(172, 460);
    vertex(172, 460);
  endShape();
  //mountain
  fill('#F3E8EE');
  beginShape();
    vertex(183, 451);
    vertex(183, 451);
    vertex(258, 260);
    vertex(298, 345);
    vertex(358, 193);
    vertex(406, 294);
    vertex(452, 184);
    vertex(496, 341);
    vertex(558, 266);
    vertex(618, 451);
    vertex(183, 451);
    vertex(183, 451);
  endShape();
  //street
  fill(0);
    quad(198, 405, 605, 405, 624, 455, 179, 455);
  fill(255);
    rect(203, 430, 15, 6);
    rect(243, 430, 15, 6);
    rect(283, 430, 15, 6);
    rect(323, 430, 15, 6);
    rect(363, 430, 15, 6);
    rect(403, 430, 15, 6);
    rect(443, 430, 15, 6);
    rect(483, 430, 15, 6);
    rect(523, 430, 15, 6);
    rect(563, 430, 15, 6);
  pop();
  
  //title
  push();
  textSize(70);
  textStyle(BOLD);
  fill('#65BB60');
    textAlign(CENTER, CENTER);
    text('YOU SUCK!', width/2, 510);
  pop();
  
  //final score
  push();
  textSize(50);
  textStyle(BOLD);
  fill(0);
    textAlign(CENTER, CENTER);
    text('score', width/2, 380);
  pop();
  
  push();
  translate(0, -50);
  //leaderboard
  push();
  textSize(40);
  textStyle(BOLD);
  fill(0);
    textAlign(CENTER, CENTER);
    text('Leaderboard', width/2, 650);
  pop();
  //chart
  push();
  fill(255);
  stroke(0);
  strokeWeight(3);
  rectMode(CENTER);
    rect(width/2, 700, width/2, 50);
    rect(width/2, 750, width/2, 50);
    rect(width/2, 800, width/2, 50);
    rect(width/2, 850, width/2, 50);
    rect(width/2, 900, width/2, 50);
    rect(width/2, 950, width/2, 50);
  pop();
  //places
  push();
  fill(0);
  noStroke();
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
    text('1', 222, 752);
    text('2', 222, 802);
    text('3', 222, 852);
    text('4', 222, 902);
    text('5', 222, 952);
  pop();
  //column titles
  fill(0);
  noStroke();
  strokeWeight(4);
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
    text('NAME', 370, 703);
    text('SCORE', 533, 703);
  pop();
  
  //names
  
  
  //scores
}