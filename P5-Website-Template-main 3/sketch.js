let particles=[];
let maxParticles;
let x,y,i,numLoops,sizeW,sizeH,numShapes,rot;


function setup() {
  createCanvas(windowWidth, windowHeight);
  maxParticles=100

  
  for(i=0;i<maxParticles;i++)
    {
      particles.push(new particle(random(0,width),random(0,height)))
    }
  
    windowResized();
  rectMode(CENTER);
  angleMode(DEGREES);
  numShapes=15;
  sizeW=width/numShapes;
  sizeH=height/numShapes;
  rot=1
  x=width/2;
  y=height/2;
  numLoops=0
 
}

function draw() {
  background(0,25);
  
  for(i=0;i<numShapes;i++)
    {
      push();
      translate(x,y)
      rotate(rot*i)
      noFill();
      stroke(255,100)
      rect(0,0,sizeW*i,sizeH*i);
      pop();
    }
  
  for(i=0;i<maxParticles;i++)
    {
      particles[i].display(10);
      particles[i].update(0.01);
    }
  
  mySignature();
  
  
  rot+=.2
}

function mySignature()
{
  textSize(20);
  strokeWeight(4);
  stroke('black');
  fill('white');
  text('Asher Borison',width-145,height-20)
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}