class Platform{
  constructor(x){
    this.x=x;
    this.y=600;
    this.width=random(100,200);
    this.height=random([ 280,360]);
    this.spt=createSprite(this.x,this.y,this.width,this.height)
    this.spt.shapeColor="Green"
    
  }
}