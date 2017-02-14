$(function(){

  $('#stopButton').click(onRed);
  $('#slowButton').click(onYellow);
  $('#goButton').click(onGreen);

  function onRed() {
    clear ();
    $('#stopLight').css('background-color', 'red');
  }

  function onYellow() {
    clear ();
    $('#slowLight').css('background-color', 'yellow');
  }

  function onGreen() {
    clear ();
    $('#goLight').css('background-color', 'green');
  }

  function clear() {
    $('#stopLight').css('background-color', 'black');
    $('#slowLight').css('background-color', 'black');
    $('#goLight').css('background-color', 'black');
  }

});