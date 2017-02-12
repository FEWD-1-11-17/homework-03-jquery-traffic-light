$(document).ready(function(){

  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  function illuminateRed() {
    clearlights();
    $('#stopLight').css("background-color","red");
  }

  function illuminateYellow() {
    clearlights();
    $('#slowLight').css("background-color","yellow");    
  }

  function illuminateGreen() {
    clearlights();
    $('#goLight').css("background-color","green");   
  }

  function clearLights() {
    $('#stopLight').css("background-color","black");
    $('#slowLight').css("background-color","black"); 
    $('#goLight').css("background-color","black");
  }  
});