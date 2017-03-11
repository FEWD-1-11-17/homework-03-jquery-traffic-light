$(document).ready(function(){

  //listen fot click events
   $('#stopButton').click(illuminateRed);
   $('#slowButton').click(illuminateYellow);
   $('#goButton').click(illuminateGreen)

   //define which color to change for the traffic light
   function illuminateRed(){
    clearlights();
    $("#stopLight").css("background-color", "red");
   }

   function illuminateYellow(){
    clearlights();
    $("#slowLight").css("background-color", "yellow");
   }

   function illuminateGreen(){
    clearlights();
    $("#goLight").css("background-color", "green");
   }

   

   function clearlights(){
    $("#stopLight").css("background-color", "black");
    $("#slowLight").css("background-color", "black");
    $("#goLight").css("background-color", "black");


   } 

});