$(document).ready(function(){
 
  $("#stopButton").click(switchRed);
  $("#slowButton").click(switchYellow);
  $("#goButton").click(switchGreen);

    function switchRed()  {
       clearLights();
      $('#stopLight').css("background-color","#ff0000");
    }
 
    function switchYellow()  {
       clearLights();
      $('#slowLight').css("background-color","#ffff00");    
    }

    function switchGreen()  {
       clearLights();
      $('#goLight').css("background-color","#00ff00");   
    }

    function clearLights() {
      $('#stopLight').css("background-color","#000000");
      $('#slowLight').css("background-color","#000000");
      $('#goLight').css("background-color","#000000");
    }
});
