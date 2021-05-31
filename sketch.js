const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, body;
var bg, player,forms,rules;
var gameState="FORM";
var characterState="QUEEN";
var characterFlag=false;
var timer = 100; 
var timer2,x,y;
var moved =0 ;


function preload() {
  bg= loadImage("bg.jpeg");
  bishop = loadImage("11 (1).png");
  rook = loadImage("9 (1).png");
  queen = loadImage("0(1).png");
  end_image = loadImage("You_won.png");
  lost_image = loadImage("You_lost.png");
}

function setup() {
  createCanvas(600,600);

  form = new Form();
  engine=Engine.create();
  world=engine.world;
  rules = new Rule();

  timer2 = new Timer();
  player = new Player(540,510,50,80);

  changeCaracter()
}

function draw() {
  background(bg);
 
  if (player.body.position.y<50){
    gameState="WIN"
  }
  if (timer<=0){
    gameState="LOST"
  }

  if (gameState==="FORM"){
    form.display();
  }
  else if (gameState==="RULE"){
    rules.display();
  }
  else if (gameState==="PLAY"){
    Engine.update(engine);
    engine.world.gravity.y=0;
    form.greeting.hide();
    timer2.display();
    keyCheck()
     if(player.body.speed<=0.1)
     {
      if (inBlackTile()){
        Matter.Body.setPosition(player.body,{x:540, y:510})
      } 
     }
    player.display();
    drawSprites()
  }
  else if(gameState==="WIN")
  {
   imageMode(CENTER)
   image(end_image,300,300,600,600)
  }
  else if(gameState==="LOST")
  {
   imageMode(CENTER)
   image(lost_image,300,300,600,600)
  }
}
function inBlackTile(){
  var x=player.body.position.x;
  var y=player.body.position.y;
  if((x>=290 && x<=375 && y>=75 && y<=150) || 
  (x>=70 && x<=145 && y>=150 && y<=225) || 
  (x>=525 && x<=600 && y>=300 && y<=370)|| 
  (x>=0 && x<=70 && y>=370 && y<=450) || 
  (x>=370 && x<=450 && y>=450 && y<=525)|| 
  (x>=145 && x<=220 && y>=525 && y<=600)) 
    {
     return true; 
    } else 
    { 
      return false; 
    }
}

function changeCaracter()
{
  var r;
  r=Math.round(random(1,3))
  switch(r)
  {
    case 1: characterState="ROOK";
            break;
    case 2: characterState="BISHOP";
            break;
    case 3: characterState="QUEEN";
            break;
    default: break;
  }
  console.log(characterState);
}
function keyCheck()
{
  if (gameState==="PLAY")
  {
    pos = player.body.position ;
    if(characterState!="KNIGHT")
    {
  if (keyDown("s") && characterState!="ROOK" 
      && player.body.position.x<=400 && player.body.position.y<=400)
       {
         Matter.Body.setPosition(player.body, {x: pos.x+73,y: pos.y+73});
        }
  else if (keyDown("w") && characterState!="ROOK" 
          && player.body.position.x<=400)
           {  
             Matter.Body.setPosition(player. body, {x: pos.x+73,y:pos.y-73});
            }
  else if (keyDown("q") && characterState!="ROOK"
          && player.body.position.x>=100 ) 
          {
           Matter.Body.setPosition(player.body, {x: pos.x-73,y: pos.y-73});
          }
  else if (keyDown("a") && characterState!="ROOK"
          && player.body.position.x>=150 && player.body.position.y<=400) 
          {
            Matter.Body.setPosition(player.body, {x: pos.x-73,y: pos.y+73});
          }
  else if (keyDown("up") && characterState!="BISHOP")
          {
           Matter.Body.setVelocity(player.body,{x:0,y:-14.5});
          }
  else if (keyDown("down") && characterState!="BISHOP" 
          && player.body.position.y<=400)
          {
           Matter.Body.setVelocity(player.body,{x:0,y:14.5});
          }
else if (keyDown("left") && characterState!="BISHOP"
        && player.body.position.x>=100) 
        {
         Matter.Body.setVelocity(player.body,{x:-14.5,y:0});
        }
else if (keyDown("right") && characterState!="BISHOP"
        && player.body.position.x<=400)
         {
         Matter.Body.setVelocity(player.body,{x:14.5,y:0});
        }
      }     
  }
}