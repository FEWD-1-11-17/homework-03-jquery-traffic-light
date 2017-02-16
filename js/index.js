$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);


  function illuminateRed() {
    $('#stopLight').toggleClass('red');
  }

  function illuminateYellow() {
    $('#slowLight').toggleClass('yellow');
  }

  function illuminateGreen() {
    $('#goLight').toggleClass('green');
  }

});