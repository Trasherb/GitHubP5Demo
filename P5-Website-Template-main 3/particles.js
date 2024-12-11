
class particle{
  
    constructor(x,y)
    {
      this.x=x;
      this.y=y;
      
      this.r=random(200,255);
      this.g=random(0,170);
      this.b=random(0,100);
      
      this.xnPos= random(-1000,1000)
      this.ynPos=random(-1000,1000)
    }
    
    display(radius)
    {
      noStroke();
      fill(255)
      circle(this.x,this.y,radius)
      
    }
    update(nSpeed)
    {
      let xNoise = noise(this.xnPos+=nSpeed)
      let yNoise = noise(this.ynPos+=nSpeed)
      
      let xMove = map(xNoise,0,1,0,width)
      let yMove = map(yNoise,0,1,0,height)
      
      this.x=xMove;
      this.y=yMove;
    }
    
  }