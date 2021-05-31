class Rule{
        constructor(){}
        display(){
            if (keyDown("space")){
                gameState="PLAY";
            }
            if (gameState==="RULE"){
            textSize(30)
            stroke("black");
            strokeWeight(3);
            text("!! RULES FOR THE GAME!! ",90,150);
            textSize(20);
            text("# Rooks move forward, backward, left or right",30,190);
            text("# Bishops move diagonally",30,220);
            text("# Knights move in an ‘L’ shape’:two squares in a horizontal or",30,250);
            text("  vertical direction, then move 1 square horizontally/vertically",30,280);
            text("# Queens move diagonally, horizontally, or vertically",30,310);
            text("# If your character steps on the black block, then you would",30,340);
            text("  have to again begin from the starting line",30,370);
            text("# Click on the squares to move there(according to your character)",30,400);
            text("# Reach the endline before the timer runs out",30,430);
            textSize(30);
            text("!! Press space to continue to the game !!",30,490);
            }

        }
    }