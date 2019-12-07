
function setup ()
{
    createCanvas(800,1000);

}

function draw()
{
    background('#F3E8EE');
    push();
        stroke('white');
        fill('black');
        text("X: "+mouseX, 0, height/4);
        text("Y: "+mouseY, 0, height/2);
    pop(); 
    carGraphic(width/2,height/2);
    

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

/* 
green: 729B79
white: F3E8EE
black: 494740
*/
