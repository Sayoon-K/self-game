var player,playerImage,bg,bgimage,alien,alienimage,alien2,alien2image,powercoins,powercoinsimage
function preload() {
  background=backgroundimg
}

function setup() {
  createCanvas(800,400);

}

function preload(){
  backgroundimg=loadimage("BG.jpg");
  playerImage=loadimage("BattleShip.png");
  powercoinsimage=loadimage("PowerCoins.png")
  alienimage=loadimage("blueenemy.png")
  alien2image=loadimage("sprite_0.png")

}

function draw() {
  background(0);
movingrect.x=World.mouseX
movingrect.y=World.mouseY
if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 &&
  movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2 
  ){ 
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}
else{
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}
if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
  rect2.x-rect1.x<=rect1.width/2+rect2.width/2 ){
    rect1.velocityX*=(-1)
rect2.velocityX*=(-1)
  }
  drawSprites();
  
}