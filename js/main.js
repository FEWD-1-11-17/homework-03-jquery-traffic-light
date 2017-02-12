$(document).ready(function(){

  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  function illuminateRed() {
    $('.bulb').css("background-color","black");
    $('#stopLight').css("background-color","red");
  }

  function illuminateYellow() {
    $('.bulb').css("background-color","black");
    $('#slowLight').css("background-color","yellow");    
  }

  function illuminateGreen() {
    $('.bulb').css("background-color","black");    
    $('#goLight').css("background-color","green");   
  }

// Robert - I found an alternate way to clear the lights but how would I do this using a clear lights function? 

});