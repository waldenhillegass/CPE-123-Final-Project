
var player;
var obstacles = [];
var collison = false;
var obstacleCount = 6
var dashedLineY = [];
var score = 0;
var explosion;


function setup ()
{
    createCanvas(800,1000);
    background('#729B79'); //green grass background

    //Loop which inits obstacles
    for(i = 0; i < obstacleCount; i++){
        obstacles.push(new Obstacle(i));
    }

    for (i = 0; i < height; i += 150){
        dashedLineY.push(i);
    }

    player = new Player();
    checkForCollisions();

}

function draw()
{
    drawBackground();

    //car(midLane(6),850,color('#AD7A99'),0); //PI=down, 0=up
    player.draw();
    //Loop to draw all obstacles
    for(i = 0; i < obstacleCount; i++){
        obstacles[i].update();
        //console.log("updating index:" , i);
         
    }
    updateScore();
    printScore();
    checkForCollisions();

    if(explosion != undefined){
        explosion.run()
    }

}

function drawBackground()
{
    //main road rectangle
    fill(73,71,64);
    noStroke();
    rect(width/14,0,width-width/7,height);

//lane lines
    for(i = 0; i < dashedLineY.length; i++){
        var DLx = width/14+((width-width/7)/6);
        //console.log("i is " , i);

        if(!collison){
            dashedLineY[i] += 5;
        }
        if(dashedLineY[i] > height){
            dashedLineY[i] = -100;
        }
        
        for(n = 0; n < 5; n++){
            dashedLines(DLx, dashedLineY[i]);
            DLx += (width-width/7)/6;
            
        }

    }

    
    
    //middle line
    stroke('#F3E8EE');
    strokeWeight(10);
    line(width/2,0,width/2,height); 

    //side lines
    stroke('#F4D058');
    strokeWeight(7);
    line(71,0,71,height);
    line(width-71,0,width-71,height);
    
}

function dashedLines(x,y)
{
    //one dashed line
    stroke('#F3E8EE');
    strokeWeight(5);
    line(x,y,x,y+50); //makes dashed line 50px long

}

function car(x,y,col,cROT)
{   
    push();
    translate(x,y);
    rotate(cROT);
    fill(col);
    noStroke();

    translate(-35,-70);
    rect(0,0,70,140);
    arc(35,0,70,40,PI,0);
    arc(35,140,70,25,0,PI);

    fill('Black');
    //front window
    beginShape();
        vertex(8,20);
        vertex(62,20);
        vertex(55,40);
        vertex(15,40);
    endShape(CLOSE);

    //back window
    beginShape();
        vertex(8,120);
        vertex(8,110);
        vertex(15,90);
        vertex(55,90);
        vertex(62,110);
        vertex(62,120);
    endShape(CLOSE);

    //left side window
    quad(8,25,15,45,15,85,8,105);

    //right side window
    quad(62,25,55,45,55,85,62,105);

    //headlights
    push();
        fill('#F3E8EE');
        translate(10,0);
        rotate(-PI/6);
        ellipse(0,0,14,6);
    pop();

    push();
        fill('#F3E8EE');
        translate(60,0);
        rotate(PI/6);
        ellipse(0,0,14,6);
    pop();
    pop();
    
}

function midLane(lanenum)
{
    var res = (width/14 + ((((width-width/7)/6) * lanenum) - ((width-width/7)/12)));

    return res;
}

// red color: F26359


function keyPressed() {
    //
    //console.log("Key pressed: "  + keyCode);
    player.keyPressHandler();
}



class Player {
    constructor() {
        this.lane = 1;
        this.laneTarget = 1;
        this.moveProgress = 1;
        this.x = midLane(1);
        this.y = 850;
        this.color = color("#F26359");
    }

    getLane() { // returns closest lane to the player as number 1-6
        if (this.lane == this.laneTarget) {
            return this.lane;
        } else {
            var distToLane = abs(this.x - midLane(this.lane));
            var distToTarget = abs(this.x - midLane(this.laneTarget));
            if (distToLane > distToTarget) {
                return this.laneTarget;
            } else {
                return this.lane;
            }
        }
    }

    getCoords() {
        return [this.x, this.y];
    }

    changeLane(moveRight) {
        if (moveRight && this.lane < 6 && this.moveProgress >= .9) {
            this.laneTarget++;
            this.moveProgress = 0;
        } else if (!moveRight && this.lane > 1 && this.moveProgress >= .9) {
            this.laneTarget--;
            this.moveProgress = 0;
        }
    }

    keyPressHandler() {
        if (keyCode == 65) { // a
            this.changeLane(false);
        } else if (keyCode == 68) { // d
            this.changeLane(true);
        }
    }

    draw() {
        car(this.x, this.y, this.color, 0);
        console.log(this.getLane());
        this.update();
    }

    update() {
        if (this.moveProgress < .9) {
            var startX = midLane(this.lane);
            var endX = midLane(this.laneTarget);
            var posChange = endX - startX;
            var easedProgress = this.easeInOutCubic(this.moveProgress);
            this.x = startX + posChange * easedProgress;
            this.moveProgress += .04;
        } else {
            this.lane = this.laneTarget;
        }
    }

    easeInOutCubic(t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 } // source: https://gist.github.com/gre/1650294
}


class Obstacle{
    constructor(laneVar){
        this.posY = random(0, -1000);
        //dy per update cycle 
        this.speed = 4;
        //The lane the car is in 1-6
        this.lane = laneVar;
        this.color = color(random(255), random(255), random(255));
        this.rotate = 0;
        this.lanes = [100, 200, 300, 400, 500, 600];
        this.posX = midLane(this.lane + 1);
    }
    update(){
       // this.posX = lanes[this.lane];
        if (this.posY < height){
            if(!collison){
                this.posY += this.speed;
            }
            this.posX = midLane(this.lane + 1);
            //console.log("this lane ", this.lane);
            this.car(this.posX, this.posY, this.color, this.rotate);
            
        }else{
            //This code runs when car is off the screen
          this.posY = random(0 , -1000);
          this.color = color(random(255), random(255), random(255));
          //this.lane = Math.floor(5 * random());
          
          
        }
        if (this.lane < 3){
            this.rotate = PI;
            this.speed = 7;
        } else {
            this.speed = 3;
            this.rotate = 0;
        }

    }

    car(x,y,col,cROT){
    push();
    translate(x,y);
    rotate(cROT);
    fill(col);
    noStroke();

    translate(-35,-70);
    rect(0,0,70,140);
    arc(35,0,70,40,PI,0);
    arc(35,140,70,25,0,PI);

    fill('Black');
    //front window
    beginShape();
        vertex(8,20);
        vertex(62,20);
        vertex(55,40);
        vertex(15,40);
    endShape(CLOSE);

    //back window
    beginShape();
        vertex(8,120);
        vertex(8,110);
        vertex(15,90);
        vertex(55,90);
        vertex(62,110);
        vertex(62,120);
    endShape(CLOSE);

    //left side window
    quad(8,25,15,45,15,85,8,105);

    //right side window
    quad(62,25,55,45,55,85,62,105);

    //headlights
    push();
        fill('#F3E8EE');
        translate(10,0);
        rotate(-PI/6);
        ellipse(0,0,14,6);
    pop();

    push();
        fill('#F3E8EE');
        translate(60,0);
        rotate(PI/6);
        ellipse(0,0,14,6);
    pop();
    pop();

    
}
}

function checkForCollisions(){
    isCollison = false;
    for(i = 0; i < obstacles.length; i++){
        //console.log("Stuff :", Math.abs(player.getCoords()[1] - obstacles[i].posY));
        if((player.getLane() == obstacles[i].lane + 1 )&& (Math.abs(player.getCoords()[1] - obstacles[i].posY) < 150)){
            collison = true;
            if (explosion == undefined){
                explosion = (new PSys(player.getCoords()[0], player.getCoords()[1], random(50, 70))); 
            }
            return true;
        }
    }


    return false;
}

function updateScore(){
    if(!collison){
        if(player.getLane() <= 3){
            score += 2;
        }else{
            score += 1;
        }
    }
}

function printScore(){
    fill(255);
    noStroke();
    textSize(33);
    text("Score : " + score, 100,100);
}

function Smoke(x , y)
{
   this.velX = random(-2, 2);
   this.velY = random(-2, 2);
   this.opaque = random(100, 255);
   this.locX = x;
   this.locY = y;
   this.r = 15;
   this.life = 100;
  
   this.updateP = function()
   {
      this.locX += this.velX;
      this.locY += this.velY;
      this.opaque -= 1;
      this.life -= 1.0;
      this.r -= 0.1;
   };
   
   this.renderP = function() 
   {
      noStroke();
      push();
         translate(this.locX, this.locY);
     
         //smoke
         fill(105, 105, 105, this.opaque);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
}

function PSys(sX, sY, num)
{
   this.particles = [];

   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Smoke(sX, sY));
   }
  
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}