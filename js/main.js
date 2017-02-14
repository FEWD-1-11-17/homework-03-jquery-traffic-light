$(function(){
  
  //listen for button click events
  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  //define functions to change color of traffic light
  function illuminateRed(){
    clearLights();
    $("#stopLight").css("background-color", "red");
  }

  function illuminateYellow(){
    clearLights();
    $("#slowLight").css("background-color", "yellow");
  }

  function illuminateGreen(){
    clearLights();
    $("#goLight").css("background-color", "green");
  }

  //define clearLights function
  function clearLights(){
    $("#stopLight").css("background-color", "black");
    $("#slowLight").css("background-color", "black");
    $("#goLight").css("background-color", "black");
  }
})