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
//achange

function setup() 
{
   createCanvas(800, 600);
}

var explosion = []; 

function draw() 
{
   background(0);
   for (var i = 0; i < explosion.length; i++){
      explosion[i].run(); 
   }
}

function mouseClicked(){
   x = mouseX;
   y = mouseY;
   explosion.push(new PSys(x, y, random(50, 70)));
}
