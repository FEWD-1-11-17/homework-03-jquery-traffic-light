$(function(){

  $('#stopButton').click(goRed);
  $('#slowButton').click(goYellow);
  $('#goButton').click(goGreen);

  function goRed() {
    clear ();
    $('#stopLight').css('background-color', 'red');
  }

  function goYellow() {
    clear ();
    $('#slowLight').css('background-color', 'yellow');
  }

  function goGreen() {
    clear ();
    $('#goLight').css('background-color', 'green');
  }

  function clear() {
    $('#stopLight').css('background-color', 'black');
    $('#slowLight').css('background-color', 'black');
    $('#goLight').css('background-color', 'black');
  }

});