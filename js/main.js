$(function(){

  $('#stopButton').click(illuminateRed); 

  function illuminateRed () {
    clearLights ();
    $('#stopLight').addClass('red-background')
  }

  $('#slowButton').click(illuminateYellow); 

  function illuminateYellow () {
    clearLights ();
    $('#slowLight').addClass('yellow-background')
  }

  $('#goButton').click(illuminateGreen); 

  function illuminateGreen () {
    clearLights ();
    $('#goLight').addClass('green-background')
  }

  function clearLights () {
    $('.bulb').removeClass('red-background yellow-background green-background')
  }
 
});