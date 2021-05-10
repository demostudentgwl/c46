var bgimg;
var b1,p1;
var score=0;
var gameState=1;
function preload(){
 bgimg=loadImage("bg2.png")
  birdimg=loadImage("bird1.png")
}
function setup() {
  createCanvas(1200,800);
  bg=createSprite(100,400,1200,800)
  bg.addImage(bgimg)
bg.velocityX=-2
bg.scale=4
//bg.visible=false
 b1=new bird(100,400,150,150)
 p1=new piller(700,150,100,300)
 p2=new piller(700,650,100,300)

}

function draw() {
  background("blue");
  fill ("black")  
  strokeWeight(5)
 textSize(50) 
 if(gameState===1){
 if(bg.x<200){
   bg.x=bg.width/2
 }

  p1.display();
  p2.display()
  b1.display();

 
}
 if(gameState===0){
  b1.end();

}
 drawSprites();

 text("score  :"+score,500,250)
}
