
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1= createSprite(500,400,80,30);
   gameObject1.shapeColor="green";

  gameObject2= createSprite(1000,400,80,30);
  gameObject2.shapeColor="green";

  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject2.shapeColor= "green";
    fixedRect.shapeColor = "green"
    gameObject1.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




