var bird
var birdimage
var pipe1
var bird2
var backgroundimage
var background
var pipe2
var edges 
function preload( ){
  birdimage=loadImage ("bird1.png") 
  pipe1=loadImage ("Pipe.png");
pipe2=loadImage("Pipe1.png");
backgroundimage=loadImage("background.jpg");

  bird2=loadImage("bird2.png");
  

  

  
}
function setup(){
  createCanvas(displayWidth,650);
  background=createSprite(0,0,700,700);
background.addImage("background",backgroundimage);
background.scale=10
  bird=createSprite(100,300,100,200);
  bird.addImage("bird",birdimage);
  bird.addImage("bird1",bird2)
  bird.scale=0.2
  bird.velocityY=bird.velocityY+0.08
  edges=createEdgeSprites()
  
  



}
function draw(){
  background.velocityX=-4
  if(background.x<0){
    background.x=background.width/2
  }
  drawSprites();
  if(keyDown("space")){
bird.velocityX=5
bird.changeAnimation("bird1",bird2)
bird.scale=0.6
  }
camera.x=bird.x
  pipes()
}
  function pipes(){
    if(frameCount%60===0){
      x=Math.round(random(500,700))
      y=Math.round(random(300,650))
    pipe=createSprite(x,y,100,100);
  pipe.addImage("pipe2",pipe1);
  pipe.scale=2.7;

  }}