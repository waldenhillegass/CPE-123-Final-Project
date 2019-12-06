function setup() {
    createCanvas(800, 1000);
  }
  
  function draw() {
    background('#F3E8EE');
    
    //start button
    fill(255);
    rectMode(CENTER);
      rect(width/2, 642, 180, 50);
    textSize(30);
    fill(0);
      textAlign(CENTER, CENTER);
      text('Try Again?', width/2, 645);
    
    //mountain shadow ddd
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
    
    //title
    textSize(70);
    textStyle(BOLD);
    fill('#65BB60');
      textAlign(CENTER, CENTER);
      text('YOU SUCK!', width/2, 510);
  }