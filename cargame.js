
function setup ()
{
    createCanvas(800,1000);
    background('#729B79'); //green grass background
}

function draw()
{
    drawBackground();

    car(midLane(6),850,color('#AD7A99'),0); //PI=down, 0=up
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

    while (DLy < height)
    {
        dashedLines(DLx,DLy);
        DLy +=150;

        if (DLy >= height && DLx < width-(2*width-width/7)/6)
        {
           DLy = 0;
            DLx += (width-width/7)/6; //<-divides the road part into the 6 lanes
        }

    }

    //middle line
    stroke('#F3E8EE');
    strokeWeight(10);
    line(width/2,0,width/2,height); 

    //side lines
    stroke('#CB904D');
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
    
}

function midLane(lanenum)
{
    var res = (width/14 + ((((width-width/7)/6) * lanenum) - ((width-width/7)/12)));

    return res;
}

