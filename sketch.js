var a=1,b=2;
var bg1,bg1image;
var bg2,bg2image;
var bg3,bg3image;
var play=1,end=2,serve=0;
var hero,hero_running,herojump;
var gamestate=play;
var enemy,enemy1image,enemy2image;
var jump=5;
var bullets=0;
var vg=a;
var life1,life2,life3,li;
var coin,coinimage;
var score=0;
var lives=3;
var heroouts;
var gameover,gameoverimage;
var restart,restartimage;
var n=serve;
var gv=serve;
var vb=serve;

var ing,coin_n_image,coin_n;
var blast,blastrunning;
var enemygroup,coingroup;
var gur = serve;
var laser,laserimage;
var jumps,coinso,outs,gamestarts,shields,lasers,blasts,starts;

function preload(){
  
  bg1image=loadImage("bg1.jpg");
  bg2image=loadImage("bg2.jpg");
  bg3image=loadImage("bg3.jpg");
///////////////////////////////////////////  
  heroouts=loadSound("laser sound.mp3");
  lasers=loadSound("laser sound.mp3");
  jumps=loadSound("jump.mp3");
  coinso=loadSound("coin.wav");
  blasts=loadSound("enemy blast.mp3");
  starts=loadSound("hero run.mp3");
  
  
  restartimage=loadImage("restart.png");
  
  gameoverimage=loadImage("game over.png");
  
  
  laserimage=loadImage("laser.png");
  blastrunning=loadAnimation("burst11.png","burst12.png","burst13.png","burst14.png","burst15.png");
  
  li=loadImage("herorun1.png");
  
  coinimage=loadImage("coin.png");
  
  coin_n_image=loadImage("coin.png");
  
  enemy1image=loadImage("enemy1.png");
  enemy2image=loadImage("enemy2.png");      
  hero_running=loadAnimation("herorun1.png","herorun2.png","herorun3.png","herorun4.png","herorun5.png","herorun6.png","herorun7.png","herorun8.png","herorun9.png");
  
  herojump=loadAnimation("herojump.png");
  
  
}

function setup(){
  createCanvas(850,520);
  
  enemygroup=new Group();
  coingroup=new Group();
  
  //370
  bg1=createSprite(370,330,4,4);
  bg1.scale=1.3;
  bg1.addImage("image",bg1image);
  //1135
  bg2=createSprite(1135,330,4,4);
  bg2.scale=1.3;
  bg2.addImage("image",bg2image);
  //1900
  bg3=createSprite(1900,330,4,4);
  bg3.scale=1.3;
  bg3.addImage("image",bg3image);
/////////////////////////////////////////// 
  
  gameover=createSprite(425,130,7,7);
 gameover.addImage("image",gameoverimage); 
  gameover.visible=false;
  
  restart=createSprite(425,3000,7,7);
  restart.addImage("image",restartimage);
  restart.scale=0.2;
  restart.visible=false;
  
  blast=createSprite(750,410,4,4);
  blast.scale=2;
  blast.addAnimation("burst",blastrunning);
  blast.setCollider("rectangle",-20,0,1,80);
  
  coin_n=createSprite(30,40,4,4);
  coin_n.addImage("image",coin_n_image);
  coin_n.scale=0.3;
  
  life1=createSprite(600,27,4,4);
  life1.addImage("image",li);
  life1.scale=0.3;
  
  life2=createSprite(640,27,4,4);
  life2.addImage("image",li);
  life2.scale=0.3;
  
  life3=createSprite(680,27,4,4);
  life3.addImage("image",li);
  life3.scale=0.3;
  
  
  hero=createSprite(100,-70,3,3);
  hero.addAnimation("running",hero_running);
  hero.addAnimation("jump",herojump);
  hero.setCollider("rectangle",10,0,90,150);
  
  ing=createSprite(425,499,850,10);
  
  laser=createSprite(380,100,2,2);
  laser.addImage("image",laserimage);
  laser.visible=false;
  
}

function draw(){
  background(120);
  
  bg1.velocityX=-10;
  bg2.velocityX=-10;
  bg3.velocityX=-10;
  
if(bg1.x<=-383){
  
    bg1.x=1897;
 bg1.velocityX=-10;
  bg2.velocityX=-10;
  bg3.velocityX=-10;
}
  if(bg2.x<=-383){
    
    bg2.x=1895;
    bg2.x=bg2.x-2;
     bg1.velocityX=-10;
  bg2.velocityX=-10;
  bg3.velocityX=-10;
  }
  if(bg3.x<=-383){
    
    bg3.x=1893;
    bg3.x=bg3.x-3;
     bg1.velocityX=-10;
  bg2.velocityX=-10;
  bg3.velocityX=-10;
  }
  
////////////////////////////////////////////  
  
  if(gamestate===play){
  
    if(hero.isTouching(enemygroup)){
      
      hero.y=50;
      hero.x=120;
      enemygroup.destroyEach();
      
      hero.velocityY=hero.velocityY+0.4;
      
      lives=lives-1;
     
    }
    
    if(lives===2){
      
      life3.visible=false;
      
      if(hero.isTouching(enemygroup)){
      
      hero.y=50;
      hero.x=120;
        enemygroup.destroyEach();
      
      hero.velocityY=hero.velocityY+0.4;
      
      lives=lives-1;
     
    }
      
    }
    
    if(lives===1){
      
      life2.visible=false;
      
      if(hero.isTouching(enemygroup)){
      
      hero.y=50;
      hero.x=120;
      enemygroup.destroyEach();
        
      hero.velocityY=hero.velocityY+0.4;
      
      lives=lives-1;
     
    }
      
    }
    
    if(lives===0){
      
      life1.visible=false;
      
      gamestate=end;
      
    }
    
    
    
    if(keyWentDown("space")){
      laser.visible=true;
      laser.velocityX=10;
      blast.velocityX=10;
      laser.y=hero.y;
      laser.x=150;
      lasers.play();
    }
    
    blast.visible=false;
    
    if(laser.x<=-150){
      
      gur=serve;
    }
    
    blast.x=laser.x;
    
    if(gur===serve){
    
      blast.x=laser.x;
      blast.visible=false;
      
      if(keyWentDown("space")){
      laser.velocityX=10;
      blast.velocityX=10;
        laser.y=hero.y;
        laser.visible=true;
        laser.x=150;
        lasers.play();
    }
      
    }
    
    if(laser.velocityX===-10){

      laser.visible=true;
      
    }
    
    if(laser.isTouching(enemygroup)){
      enemygroup.destroyEach();
      gur=play;
     blasts.play();
    }
    
  if(gur===play){
    blast.visible=true;
   laser.y=100;
    laser.visible=false;
    laser.velocityX=-10;
    
  }
     
    if(hero.isTouching(coingroup)){
      
      coin.velocityX=-8;
      coin.velocityY=-12;
     score=score+1;
      coinso.play();
    }
    
   bg1.onMousePressed = function(){
      
     jumps.play();
      hero.velocityY=-14;
      jump=jump-1;
      hero.changeAnimation("jump",herojump);
    }
    
     bg2.onMousePressed = function(){
      
       jumps.play();
      hero.velocityY=-14;
      jump=jump-1;
      hero.changeAnimation("jump",herojump);
    }
    
     bg3.onMousePressed = function(){
      
       jumps.play();
      hero.velocityY=-14;
      jump=jump-1;
      hero.changeAnimation("jump",herojump);
    }
    
    hero.velocityY=hero.velocityY+1;
    
    if(hero.isTouching(ing)){
    
      jump=5;
      hero.changeAnimation("running",hero_running);
      
    }
    
    coins();
  enemys();
  
      
  }
  
  hero.collide(ing);
  ing.visible=false;
  
  drawSprites();
  ////////////////////////////////////////
  
  if(gamestate===end){
    
    if(mousePressedOver(restart)){
      
        n=play;
      
    }
    
    coin_n.visible=false;
   
    gameover.visible=true;
    restart.visible=true;
    restart.y=360;
    
    //enemygroup.destroyEach();
    coingroup.destroyEach();
   coin_n.visible=false;
    
    
    
    hero.visible=false;
    enemygroup.visible=false;
    coingroup.visible=false;
    
    
    if(keyWentDown("space")){
      
      hero.velocityY=0;
      heroouts.play();
    }
    
    bg1.velocityX=0;
    bg2.velocityX=0;
    bg3.velocityX=0;
    
  }
  
  if(n===play){
    reset();
  }
  
  /*if(gv===play){
      gamestate=end;
    gameover.visible=true;
    
    bg1.velocityX=0;
    bg2.velocityX=0;
    bg3.velocityX=0;
     hero.destroy();
    enemygroup.destroyEach();
    coingroup.destroyEach();
coin_n.visible=false;
    
    }*/
  
  
  ///////////////////////////////////////
  // only for text system
  
  if(gamestate===play){
    fill("yellow");
    textSize(30);
    text(""+score,75,51);

    
    if(vg===a){
      fill("yellow");
    textSize(30);
      text("you have only 5 jumps",width/3,height/3);
      
      text("press SPACE to shoot laser",250,height/2);
      
      if(jump===4){
        
        vg=b;
      }
      
    }
    
    
    fill("yellow");
    textSize(20);
    text("click for jump",720,27);
    text("jump:"+jump,720,47);
    
    text("lifes:",520,30);
  
    if(jump==0){
      
      bg1.onMousePressed = function(){
      
        hero.velocityY=hero.velocityY+1;
     hero.changeAnimation("jump",herojump);
    }
    
     bg2.onMousePressed = function(){
      
       hero.velocityY=hero.velocityY+1;
     hero.changeAnimation("jump",herojump);
    }
    
     bg3.onMousePressed = function(){
      
       hero.velocityY=hero.velocityY+1;
     hero.changeAnimation("jump",herojump);
    }
      
    }
    
    
  }
  
}



function enemys(){
  //200
  if(frameCount%200===0){
    
    enemy=createSprite(1000,410,3,3);
    enemy.addImage("image",enemy1image);
    enemy.scale=0.440;
    enemy.velocityX=-10;
    enemy.lifetime=110;
    enemygroup.add(enemy);
    
    var p=Math.round(random(1,2))
    
    switch(p){
        
      case 1: enemy.addImage("image",enemy1image);
        break;
      case 2: enemy.addImage("image",enemy2image);
        break;
        
    }
    
  }
  
}

 function coins(){
   
    if(frameCount%76===0){
    
    coin=createSprite(775,213,2,2);
    coin.addImage("image",coinimage);
    coin.scale=0.2;
    coin.lifetime=80;
    
    coin.velocityX=-10;
    
      coingroup.add(coin);
      
  }
   
 }

function reset(){
  gamestate=play;
  
 hero.visible=true;
  restart.visible=false;
  gameover.visible=false;
  restart.y=3000;
  coin_n.visible=true;
  life1.visible=true;
  life2.visible=true;
  life3.visible=true;

  
  bg1.velocityX=-10;
  bg2.velocityX=-10;
  bg3.velocityX=-10;
  
  enemygroup.visible=true;
  
  enemygroup.lifetime=110;
  coingroup.lifetime=80;
  gamestate=play;
  
  
}



