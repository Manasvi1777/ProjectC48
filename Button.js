function checkKeys()
{
    var keysPressed = {};
    document.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;
    
      if (keysPressed['ArrowRight'] && event.key == "ArrowDown") {
          
        Matter.Body.setVelocity(player.body,{x:16.5,y:16.5});
        
      }
      else if (keysPressed['ArrowRight'] && event.key == "ArrowUp") {
          
        Matter.Body.setVelocity(player.body,{x:16.5,y:-16.5});
        
      }
      else if (keysPressed['ArrowLeft'] && event.key == "ArrowUp") {
          
        Matter.Body.setVelocity(player.body,{x:-16.5,y:-16.5});
        
      }
      else if (keysPressed['ArrowLeft'] && event.key == "ArrowDown") {
          
        Matter.Body.setVelocity(player.body,{x:-16.5,y:16.5});
        
      }
      else if (event.key == 'ArrowUp')
       {
        Matter.Body.setVelocity(player.body,{x:0,y:-16.5});
      }
      else if (event.key == 'ArrowDown')
       {
        Matter.Body.setVelocity(player.body,{x:0,y:16.5});
    }
    else if (event.key == 'ArrowLeft') {
      Matter.Body.setVelocity(player.body,{x:-16.5,y:0});
    }
    else if (event.key == 'ArrowRight') {
      Matter.Body.setVelocity(player.body,{x:16.5,y:0});
    }
    });
    
    document.addEventListener('keyup', (event) => {
      delete keysPressed[event.key];
    });
    /*function keyPressed()
    {
      if(keyCode === 32)
      {
        Matter.Body.setVelocity(player.body,{x:16.5,y:16.5});
        
      }
      else if(keyCode === LEFT_ARROW && player.body.position.x>=170)
      {
        Matter.Body.setVelocity(player.body,{x:-16.5,y:0});
        
      }
      else if(keyCode === RIGHT_ARROW && player.body.position.x<=400)
      {
        Matter.Body.setVelocity(player.body,{x:16.5,y:0});
      }
      else if(keyCode === UP_ARROW && player.body.position.y>=200)
      { 
        Matter.Body.setVelocity(player.body,{x:0,y:-16.5});
      }
      else if(keyCode === DOWN_ARROW && player.body.position.y<=400)
      {
        Matter.Body.setVelocity(player.body,{x:0,y:16.5});
      }
    
    
    }
    */
}