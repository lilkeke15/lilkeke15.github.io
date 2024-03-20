/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
  ENTER: 13,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37,
};

  // Game Item Objects
var walker = {
  X: 0,
  Y: 0,
  speedX: 0,
  speedY: 0,
}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();


  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    
      if (event.which === KEY.ENTER) {
        console.log("enter pressed");
      }
      if (event.which === KEY.UP) {
        walker.speedY = -5;
      }
      if (event.which === KEY.DOWN) {
        walker.speedY = 5;
      }
      if (event.which === KEY.RIGHT) {
        walker.speedX = 5;
      }
      if (event.which === KEY.LEFT) {
        walker.speedX = -5;
      }
    
  }
  function handleKeyUp(event) {
    
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
    if (event.which === KEY.UP) {
      walker.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
    }
  
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
walker.X += walker.speedX;
walker.Y += walker.speedY;
}
function redrawGameItem(){
  $("#walker").css("left", walker.X); // draw the box in the new location, positionX pixels away from the "left"
  $("#walker").css("top", walker.Y);
}
function wallCollision(){
  if(walker.X < 0){
    walker.X -= walker.speedX;
  }
  if(walker.Y < 0){
    walker.Y -= walker.speedY;
  }
  if(walker.X + $("#walker").width() > $("#board").width()){
    walker.X -= walker.speedX;
  }
  if(walker.Y + $("#walker").height() > $("#board").height()){
  walker.Y -= walker.speedY;
}
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
