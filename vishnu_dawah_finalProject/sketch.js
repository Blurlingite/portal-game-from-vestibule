/*
Created by Vishnu Dawah May 16, 2018.
A red ball bounces off the top and bottom of the screen while passing through a portal. 
Press the button below the Portal 1 to activate it. 
Then press another button to release it out of Portal 2. 
The portals light up when you click your mouse on the blue squares. 

Links to my blog relating to this project:
https://thebluelight820522800.wordpress.com/2018/05/17/the-final-project/
https://thebluelight820522800.wordpress.com/2018/05/17/final-project-contd/
https://thebluelight820522800.wordpress.com/2018/05/18/final-project-last-update/


*/
 var on = false;                      // assigns false to "on" so that Red Ball will stay in Portal 1 when you click its button 
 var barrier = [];                     // declares an empty arrayhat will become a barrier
 var redBall = {                       // An object, the Red Ball bouncing back and forth
  x: 86,                               // Red Ball starting x coordinate
  y: 600,                              // Red Ball starting y coordinate
  speed:5,                              // Red Ball's speed
  redMove: function(){                  // controls the Red Ball's movement
    this.y -= this.speed;               // makes Red Ball move from bottom to top of screen (starting movement)
      if(this.y < 0 || this.y > 600){   // Red Ball bounces off the top and bottom of screen when...
      this.speed *= -1;                 // you multiply its speed by -1
  }
},
  redDisplay: function(){               // displays Red Ball
  strokeWeight(12);                     // outline thickness of Red Ball
  stroke(220,0,0);                      // makes ball red
   
  point(redBall.x,redBall.y);           // draws the Red Ball
}
}
function setup(){
  createCanvas(300,600);
   for (var i = 0; i < 800; i++) {        // for loop to iterate through the loop and increment
    barrier[i] = {                        // object array
      x1: random(140,160),                // place x position randomly between 0 and width
      y1: random(0, height),             // place y position randomly between 0 and width
     
      display: function() {             // displays the barrier
        stroke(random(225));            // randomizes the stroke of barrier between white and black
        point(this.x1, this.y1);        // each individual particle of the barrier
       
      }
    }
   }
   
    portal1 = new Portal(80,82,99);         // create Portal 1 using constructor function
    portal2 = new Portal(220, 78, 99);      // create Portal 2 using constructor function
}
 
function draw(){
    background(77,122,77);                        // makes background a light green
    
    for(i= 0; i < barrier.length; i++){           // go through barrier array
      barrier[i].display();                       // display each particle of the barrier
    }
  
   redBall.redMove();     // moves Red Ball by calling on the object redBall function
   redBall.redDisplay();  // displays Red Ball by calling on the object redBall function
   
   var buttonSize = 35;                 // sets the size of the button to 35 pixels
   
   for(x = 67; x <= width; x += 143){     // nested for loop that makes the blue square buttons while increasing x position you must...
    for(y = 567; y <= 600; y += 140){     // also increase the y position
       
      fill(0,0,222);                        // fills rectangles with blue fill
      noStroke();                           // no outline for rectangles
      rect(x,y,buttonSize, buttonSize);     // rectangles are drawn in positions depending on the nested for loop on lines 85-86
    }
   }
     portal1.display();       // displays Portal 1 by calling the constructor's display function
     portal2.display();       // displays Portal 1 by calling the constructor's display function
   

              // PORTAL 1
              
      if(on){       // if on is true (and it does becomes true when you click on button 1 because of mousePressed function) and...
         if(mouseX > 67  && mouseX < 104 && mouseY > 560 && mouseY < 600){ // if the mouse hovers on the 1st blue square and...
       
          if(mouseIsPressed){                                             // if the mouse is pressed
          
          fill(222,88,22);                                              // giant circle #1 will turn orange and...
          ellipse(80,78,99,99);
        
           if(redBall.y < 150 && redBall.y > 40){                                     // if the ball is in the portal 1 then...
            redBall.y = 80;                                                           // the ball will stay in the portal and will...
            redBall.speed = 0;                                                        // not move as long as the mouse is being pressed
          }
        }
        }
        
        // PORTAL 2
        
      }else{                                                                     // if on is false (when you click the second square) and...
            if(mouseX > 210  && mouseX < 246 && mouseY >560 && mouseY < 600){   // the mouse is on the second button and...
              if(mouseIsPressed){                                               // the mouse is pressed
                fill(222,88,22);                                                // giant circle # 2 lights up
                ellipse(220,78,99,99);
                redBall.x = 230;                                                // redBall.x had to be assigned a different value because if I used a "+" it would keep moving the ball away from portal 2
                redBall.speed = -5;                                             // makes the red ball shoot out of Portal 2
                // redBall.y -= redBall.speed;
               if(redBall.y > 600 || redBall.y < 0){                            // makes the red ball bounce off the top and bottom of the screen by...
                 redBall.speed*= -1;                                            // multiplying its speed by -1
                
               }
               }
               }
        } 
}
 
function mousePressed(){                // allows the buttons to work by assigning a true or false value to its action
  if(mouseX > 67  && mouseX < 84 && mouseY > 560 && mouseY < 600 || mouseX > 210  && mouseX < 246 && mouseY >560 && mouseY < 600){    // if the mouse clicks buttons 1 or 2   didn't include buttons 3 and 4 here which may have been why they didn't work
    
      on = !on;       // on is not on, changes current boolean value to its opposite
       
    }
  }
  
  
  function Portal(x, y, r){         // constructor function with 3 parameters that will define the portals
    this.x = x;                     // the portal's x value
    this.y = y;                     // the portal's y value
    this.r = r;                     // the portal's radius
   
  
    
    this.display = function(){         // will display the portals 
      stroke(222, 0, 0);               // portals will have a red outline
      fill(0);                         // portals will have a black fill
      ellipse(this.x, this.y, this.r); // a portal will be drawn using values the variables are assigned to
    }
    }                                 // end of code