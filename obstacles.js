
var obstacles = [];
collison = false;
obstacleCount = 6

//TODO: populate this with the lanes within the art.
var lanesArr = [100, 200, 300, 400, 500, 600];

function setup() {
    createCanvas(1000, 800);
    for(i = 0; i < obstacleCount; i++){
        obstacles.push(new Obstacle(i));
    }

}

function draw()
{
    background(255);
    for(i = 0; i < obstacleCount; i++){
        obstacles[i].update();
        console.log("updating index:" , i);
         
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
        this.posX = this.lanes[this.lane];
    }

    update(){
       // this.posX = lanes[this.lane];
        if (this.posY < 800 && !collison){
            this.posY += this.speed;
            this.posX = this.lanes[this.lane];
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

    




        //if the lane is one of the three left lanes speed it up since it is oncoming traffic
        
        
}

    



