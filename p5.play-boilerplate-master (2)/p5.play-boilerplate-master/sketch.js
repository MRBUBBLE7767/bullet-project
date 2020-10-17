var bulle1,wall1,sum1,sum11,sum111;
var bulle2,wall2,sum2,sum22;
var bulle3,wall3,sum3,sum33;
var bulle4,wall4,sum4,sum44;
var speed1,weight1,bigWall,thickness1;
var speed2,weight2,bigWall2;
var speed3,weight3,bigWall3;
var speed4,weight4,bigWall4;

function setup() {
  createCanvas(1600,400);
  thickness1 = random(22,83);
  sum11=thickness1*thickness1*thickness1;
  bigWall = createSprite(1150,50,50,thickness1);  
  bigWall.shapeColor="purple";
  //////
  bulle1 = createSprite(50,50,20,10);
  bulle1.shapeColor="white";
  wall1 = createSprite(0,100,2450,10);
  speed1 = random(55,100);
  weight1 = random(400,1500);
  bulle1.velocityX = speed1;
  ////////
  bulle2 = createSprite(50,150,20,10);
  bulle2.shapeColor="white";
  wall2 = createSprite(0,200,2450,10);
  speed2 = random(55,100);
  weight2 = random(400,1500);
  bulle2.velocityX = speed2;
  bigWall2 = createSprite(1150,150,50,thickness1);  
  bigWall2.shapeColor="purple";
  ////////////
  bulle3 = createSprite(50,250,20,10);
  bulle3.shapeColor="white";
  wall3 = createSprite(0,300,2450,10);
  speed3 = random(55,100);
  weight3 = random(400,1500);
  bulle3.velocityX = speed3;
  bigWall3 = createSprite(1150,250,50,thickness1);  
  bigWall3.shapeColor="purple";
  /////////
  bulle4 = createSprite(50,350,20,10);
  bulle4.shapeColor="white";
  wall4 = createSprite(0,400,2450,10);
  speed4 = random(55,100);
  weight4 = random(400,1500);
  bulle4.velocityX = speed4;
  bigWall4 = createSprite(1150,350,50,thickness1);  
  bigWall4.shapeColor="purple";
  //////////



}


function draw() {
  background("black");
  if(bulle1.isTouching(bigWall)){
    bulle1.velocityX=0;
    sum1=0.5*weight1*speed1*speed1;
    sum111=sum1/sum11;
  }  
  if(sum111>10){
    bulle1.shapeColor="red";
  }
   if(sum111<10){
    bulle1.shapeColor="green";
  }
  if(bulle2.isTouching(bigWall2)){
    bulle2.velocityX=0;
    sum2=0.5*weight2*speed2*speed2;
    sum22=sum2/sum11;
  }  
  if(sum22>10){
    bulle2.shapeColor="red";
  }
  if(sum22<10){
    bulle2.shapeColor="green";
  }
  if(bulle3.isTouching(bigWall3)){
    bulle3.velocityX=0;
    sum3=0.5*weight1*speed3*speed3;
    sum33=sum3/sum11;
  }  
  if(sum33>10){
    bulle3.shapeColor="red";
  }
  if(sum33<10){
    bulle3.shapeColor="green";
  }
  if(bulle4.isTouching(bigWall4)){
    bulle4.velocityX=0;
    sum4=0.5*weight1*speed4*speed4;
    sum44=sum4/sum11;
  }  
  if(sum44>10){
    bulle4.shapeColor="red";
  }
  if(sum44<10){
    bulle4.shapeColor="green";
  }

  drawSprites();
}
