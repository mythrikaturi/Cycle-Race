
var player
var playerimg

var playercollide


var road
var roadimg

var opponentsgroup
var opponent1img 
var opponent2img
var opponent3img
var opponent4img
var opponent5img
var opponent6img
var opponent7img
var opponent8img
var opponent9img

var gameoverimg

var gamestate="play"

function preload(){
roadimg=loadImage("Road.png")
playerimg=loadAnimation("mainPlayer1.png","mainPlayer2.png")

opponent1img=loadImage("opponent1.png")
opponent2img=loadImage("opponent2.png")
opponent3img=loadImage("opponent3.png")
opponent4img=loadImage("opponent4.png")
opponent5img=loadImage("opponent5.png")
opponent6img=loadImage("opponent6.png")
opponent7img=loadImage("opponent7.png")
opponent8img=loadImage("opponent8.png")
opponent9img=loadImage("opponent9.png")
playercollide=loadImage("mainPlayer3.png")

gameoverimg=loadImage("gameOver.png")


}







function setup(){
createCanvas(1200,300)

road=createSprite(100,150)
road.addImage("road",roadimg)
road.velocityX=-6

player=createSprite(70,150)
player.addAnimation("biking_player",playerimg)
player.scale=0.05

opponentsgroup=new Group()

}















function draw(){
  if (gamestate=="play"){
    if (road.x<0){
      road.x=road.width/2
    }
    player.y=mouseY


spawnopponents()
if (player.isTouching(opponentsgroup)){
gamestate="end"
}
  }

  if (gamestate=="end"){
road.velocityX=0
opponentsgroup.setVelocityXEach(0) 
player.addImage("collide",playercollide)
player.changeAnimation("collide")
gameover=createSprite(400,150)
gameover.addImage("gameover",gameoverimg)
  }



player.y=mouseY


spawnopponents()


drawSprites()
}

function spawnopponents(){
if (frameCount%70==0){
var opponents=createSprite(800,300,20,20)
opponents.y=Math.round(random(0,400))
opponents.velocityX=-5
var numbers=Math.round(random(1,6))
opponentsgroup.add(opponents)
opponents.scale=0.05
switch(numbers)
{
  case 1:opponents.addImage("opponent1",opponent1img)
  break;

  case 2:opponents.addImage("opponent2",opponent2img)
  break;



  case 3:opponents.addImage("opponent4",opponent4img)
  break;

  case 4:opponents.addImage("opponent5",opponent5img)
  break;

  

  case 5:opponents.addImage("opponent7",opponent7img)
  break;

  case 6:opponents.addImage("opponent8",opponent8img)
  break;

  

  default:
    break;
}


}



}
