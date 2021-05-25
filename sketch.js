var countDistanceX=0
var gap=60

function preload()
{}

function setup() {
  createCanvas(7346, 668);
  for(var i=0; i<20;i++){
  platform=new Platform(countDistanceX);
    countDistanceX=countDistanceX+platform.width+gap
    gap=random(20,40,60,80,100,120,140,160)
  
  }
 
}

function draw() {
  background('skyblue');  
  drawSprites();

}

