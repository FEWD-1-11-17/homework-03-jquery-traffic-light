$(document).ready(function(){

  $('#stopButton').click(illuminateRed);

  $('#slowButton').click(illuminateYellow);

  $('#goButton').click(illumninateGreen);


  function illuminateRed() {
    clearLights();
    $('#stopLight').css('background-color', 'red');
  }

  function illuminateYellow() {
    clearLights();
    $('#slowLight').css('background-color', 'yellow');
  }

  function illumninateGreen() {
    clearLights();
    $('#goLight').css('background-color', 'green');
  }

  function clearLights() {
    $('.bulb').css('background-color', '#111');
  }

  // function switchWhite() {
  //   $('body').attr('class', 'white');
  // }

});
