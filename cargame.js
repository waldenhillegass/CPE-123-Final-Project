
var player;
var obstacles = [];
collison = false;
obstacleCount = 6
var dashedLineY = [];


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
}

function drawBackground()
{
    //main road rectangle
    fill(73,71,64);
    noStroke();
    rect(width/14,0,width-width/7,height);

//lane lines
    //all dashed lines
    var DLx = width/14+((width-width/7)/6); //<-equation for lane line
    var DLy = 0;
    
    console.log("line count ", dashedLineY);
    
    for(i = 0; i < dashedLineY.length; i++){
        dashedLineY[i] += 5;
        if(dashedLineY[i] > height){
            dashedLineY[i] = 0;
        }
        for(n = 0; n < 5; n++){
            dashedLines(DLx, dashedLineY[i]);
            DLx += (width-width/7)/6;
            
        }

    }


    
    /*
    while (DLy < height)
    {
        dashedLines(DLx,DLy);
        DLy +=150;
        i
        if (DLy >= height && DLx < width-(2*width-width/7)/6)
        {
           DLy = 0;
            DLx += (width-width/7)/6; //<-divides the road part into the 6 lanes
        }

    }
    */
    
    
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
    console.log("Key pressed: "  + keyCode);
    player.keyPressHandler();
}



class Player {
    constructor() {
        this.lane = 1;
        this.x = midLane(1);
        this.y = 850;
        this.color = color("#F26359");
    }

    getLane() {
        return this.lane;
    }

    getCoords() {
        return [this.x, this.y];
    }

    changeLane(moveRight) {
        if (moveRight && this.lane < 6) {
            this.lane++;
        } else if (!moveRight && this.lane > 1) {
            this.lane--;
        }
        this.x = midLane(this.lane);
    }

    keyPressHandler() {
        if (keyCode == 37) { // left arrow key
            this.changeLane(false);
        } else if (keyCode == 39) { // right arrow key
            this.changeLane(true);
        }
    }

    draw() {
        car(this.x, this.y, this.color, 0);
    }
}


class Obstacle{
    constructor(laneVar){
        this.posY = random(0, -1000);
        //dy per update cycle 
        this.speed = 4;
        //The lane the car is in 1-6
        this.lane = laneVar;
       
        this.rotate = 0;
        this.lanes = [100, 200, 300, 400, 500, 600];
        this.posX = midLane(this.lane + 1);
    }
    update(){
       // this.posX = lanes[this.lane];
        if (this.posY < 800 && !collison){
            this.posY += this.speed;
            this.posX = midLane(this.lane + 1);
            console.log("this lane ", this.lane);
            this.car(this.posX, this.posY, color('#896279'), this.rotate);
            
        }else{
          this.posY = random(0 , -1000);
          this.lane = Math.floor(5 * random());
          
          
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
