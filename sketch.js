var wall,thickness;
var bullet,speed,weight;
function setup(){
  createCanvas(1200,400);
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=color(255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function hasCollied(bullet,wall)
{ var bulletRightEdge;
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}

function draw(){
  background(0);
  if(hasCollied(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage>10)
    {
      
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="blue";
    }
  }


drawSprites();



}

