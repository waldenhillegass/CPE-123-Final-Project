var reverseMultipler = 1.7;
var speed = 4;
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

    




        //if the lane is one of the three left lanes speed it up since it is oncoming traffic
        
        
}

    



