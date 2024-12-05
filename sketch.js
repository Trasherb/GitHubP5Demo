let particles=[];
let maxParticles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxParticles=100
  
  let x=random(0,width);
  let y=random(0,height)
  
  for(i=0;i<maxParticles;i++)
    {
      particles.push(new particle(random(0,width),random(0,height)))
    }
}

function draw() {
  background(0,25);
  
  for(i=0;i<maxParticles;i++)
    {
      particles[i].display(10);
      particles[i].update(0.003);
    }
    
}
