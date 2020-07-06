let bubbles = [];
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 30; i++){
  let x = random(0,400);
  let y = random(0,400);
  let r = random(20,40);
  b = new Bubble(x,y,r)
  bubbles.push(b);
  }
}

function draw() {
  background(0);
  for(let i = 0; i < bubbles.length;i++){
    if(bubbles[i].rollover(mouseX,mouseY)){
      bubbles[i].changeColor(255);
    }else{
      bubbles[i].changeColor(0);
    }
    bubbles[i].show();
    bubbles[i].move();
  }
}

function mousePressed(){
  for(let i = bubbles.length -1;i>=0;i--){
    if(bubbles[i].rollover(mouseX,mouseY)){
      bubbles.splice(i,1)
    }
  }
}




class Bubble{
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = 0;
  }

  changeColor(bright){
    this.brightness = bright;
  }

  rollover(px,py){
    let d = dist(px,py,this.x,this.y);
    if(d < this.r ){
      return true
    }else{
      return false
    }
  }
  show(){
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 250)
    ellipse(this.x,this.y,this.r * 2);
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}
