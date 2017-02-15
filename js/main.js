$(function(){

  // listen for a click event on id=stopButton
  $("#stopButton").click(illuminateRed)

  // listen for a click event on id=slowButton
  $("#slowButton").click(illuminateYellow)

  // // listen for click event on id=goButton
  $("#goButton").click(illuminateGreen)

  function illuminateRed() {
    clearLights();
    $("#stopLight").css("backgroundColor", "red")
  }

  function illuminateYellow() {
    clearLights();
    $("#slowLight").css("backgroundColor", "yellow")
  }


  function illuminateGreen() {
    clearLights();
    $('#goLight').css("backgroundColor", "green")
  }
  
  function clearLights() {
    $('#stopLight').css("backgroundColor", "black")
    $("#slowLight").css("backgroundColor", "black")
    $("#goLight").css("backgroundColor", "black")
  }
  
  


});