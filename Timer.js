class Timer{
    constructor(){}

    display(){
     timer = timer - 0.1;
     textSize(25)
     fill("black");
     text("TIMER: " + Math.round(timer),470,20);
     if (timer<=0){
         gameState="OVER";
         text("GAMEOVER",300,300);
     }   
    }
}