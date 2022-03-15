var bgImg;
var shooter1Img,shooter2Img,shooter3Img;
var explosion,lose,win;
var shooter;
var zombieImg,zombie;






function preload(){

    bgImg = loadImage("./assets/bg.jpeg");
    shooter1Img = loadImage("./assets/shooter_1.png");
    shooter2Img = loadImage("./assets/shooter_2.png");
    shooter3Img = loadImage("./assets/shooter_3.png");
    explosion   = loadSound("./assets/explosion.mp3");
    lose        = loadSound("./assets/lose.mp3");
    win         = loadSound("./assets/win.mp3");
    zombieImg   = loadImage("./assets/zombie.png")
}


function setup(){
    createCanvas(1000,700);
 
    shooter = createSprite(60,550,20,20);
    shooter.addImage(shooter1Img);
    shooter.scale=0.4



}



function draw(){
background(bgImg)

if(keyDown(UP_ARROW)){
    shooter.velocityY=-5;
}

if(keyDown(DOWN_ARROW)){
    shooter.velocityY=5;
}







spawnZombie();

drawSprites()
}

function spawnZombie(){

if(frameCount % 80 === 0){
    zombie = createSprite(600,165,10,40)
    zombie.y = Math.round(random(80,120));
    zombie.x = Math.round(random(520,80));
    zombie.addImage(zombieImg);
    zombie.scale=0.15
    zombie .velocityX=-5

}




}