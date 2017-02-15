$(function(){

  $("#stopButton").click(switchRed);
  $("#slowButton").click(switchYellow);
  $("#goButton").click(switchGreen);

  function switchRed() {
    $("#stopLight").toggleClass('switchRed');
  }

    function switchYellow() {
    $("#slowLight").toggleClass('switchYellow');
  }

  function switchGreen() {
    $("#goLight").toggleClass('switchGreen')
  }

  

});