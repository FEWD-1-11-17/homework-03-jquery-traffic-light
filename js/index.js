$(document).ready(function(){
 
  $("#stopButton").click(switchRed);
  $("#slowButton").click(switchYellow);
  $("#goButton").click(switchGreen);

    function switchRed()  {
      $('#stopLight').css("background-color","red");
    }
 
    function switchYellow()  {
      $('#slowLight').css("background-color","yellow");    
    }

    function switchGreen()  {
      $('#goLight').css("background-color","green");   
    }

  
});
