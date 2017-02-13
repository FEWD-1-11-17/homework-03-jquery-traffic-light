$(document).ready(function(){
 
  $("#stopButton").click(switchRed);
  $("#slowButton").click(switchYellow);
  $("#goButton").click(switchGreen);

    function switchRed()  {
       clearLights();
      $('#stopLight').css("background-color","red");
    }
 
    function switchYellow()  {
       clearLights();
      $('#slowLight').css("background-color","yellow");    
    }

    function switchGreen()  {
       clearLights();
      $('#goLight').css("background-color","green");   
    }

    function clearLights() {
      $('#stopLight').css("background-color","black");
      $('#slowLight').css("background-color","black");
      $('#goLight').css("background-color","black");
    }
});
