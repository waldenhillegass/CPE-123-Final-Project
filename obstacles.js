var reverseMultipler = 1.7;
var speed = 4;

//TODO: populate this with the lanes within the art.
var lanes = [1, 2, 3, 4, 5, 6];

class Obstacle{
    constructor(laneVar){
        this.posY = 0;
        //dy per update cycle 
        this.speed = 4
        //The lane the car is in 1-6
        this.lane = laneVar;
        this.posX = lanes[lane + 1];
    }

    update(){
        if (this.posY < 800 && !collison){
            this.posY += this.speed;
            draw(this.posX, this.posY);
        }else{
            //TODO figure out how to destroy this object.
        }

    }

    draw(x , y){
        
    }




        //if the lane is one of the three left lanes speed it up since it is oncoming traffic
        
        }
    }

    
    }


}