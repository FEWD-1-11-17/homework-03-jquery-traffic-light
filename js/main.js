$(function(){


    //Listners
    $('#stopButton').click(illuminateRed);
    $('#slowButton').click(illuminateYellow);
    $('#goButton').click(illuminateGreen);

    //On click will run the following functions
   function illuminateRed() {
    clearLights();
    $('#stopLight').css('background-color', 'red');
   }

    function illuminateYellow() {
      clearLights();
      $('#slowLight').css('background-color', 'yellow');
    }

    function illuminateGreen() {
      clearLights();
      $('#goLight').css('background-color', 'green');
    }


    //function will clear all colors before illuminating the click event
    function clearLights() {
      $('#stopLight').css("background-color", "black");
      $('#slowLight').css("background-color", "black");
      $('#goLight').css("background-color", "black");

    }

});







