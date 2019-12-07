function setup() {
    createCanvas(800, 1000);
  }
  
  function draw() {
    background('#F3E8EE');
    
    //start button
    push();
    fill(255);
    strokeWeight(3);
      quad(347, 613, 454, 613, 454, 659, 347, 659);
    textSize(30);
    fill(0);
      text('Start', 366, 645);
    pop();
    
    //mountain shadow
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
      text('CAR GAME', 214, 530);
    
    //car
    push();
    scale(.7);
    carGraphic(460, 530);
    pop();
  }
  
  function carGraphic (x,y)
  {
      translate(x,y);
      noStroke();
      fill('#729B79');
      
      //main rect
      rect(0,0,200,70); 
      
      //top part
      arc(140,20,130,150,3*PI/2,0);
      arc(60,20,130,150,PI,3*PI/2);
      rect(60,-55,80,75); 
  
      //back
      rect(-30,0,40,70);
      rect(-50,20,20,50);
      arc(-30,20,40,40,PI,3*PI/2);
  
      //front
      rect(190,-10,30,80);
      arc(220,70,120,160,3*PI/2,0);
  
      //wheels
      fill('#F3E8EE');
      ellipse(45,65,70);//white
      ellipse(170,65,70);
      noFill();
      stroke("#494740");
      strokeWeight(7);
      ellipse(45,65,50);
      ellipse(170,65,50);
  
      //headlight
      push();
          fill('#F3E8EE');
          noStroke();
          translate(255,35);
          rotate(PI/4);
          ellipse(0,0,25,13);
      pop();
  
      //windows
      fill('#F3E8EE');
      noStroke();
      arc(95,0,150,80,PI,3*PI/2);
      arc(100,0,150,80,3*PI/2,0);
  }