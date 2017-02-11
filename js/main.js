$(function(){
  $("#stopButton").click(stopButtonClickHandler);
  $("#slowButton").click(slowButtonClickHandler);
  $("#goButton").click(goButtonClickHandler);
  $(".bulb").click(showWhichBulb)

  function stopButtonClickHandler(){
    setLightColor('#stopLight', "red");
  }
  
  function slowButtonClickHandler(){
    setLightColor('#slowLight', "yellow");
  }

  function goButtonClickHandler() {
    setLightColor('#goLight', "green");
  }

  function setLightColor(lightId, lightColor) {
    clearLights();
    $(lightId).css("backgroundColor", lightColor);
  }

  function clearLights() {
    $('#stopLight').css("backgroundColor", "black");
    $('#slowLight').css("backgroundColor", "black");
    $('#goLight').css("backgroundColor", "black");
  }

  function showWhichBulb(){
    alert($(this).cssattr("id"))
  }

  function setLightColor2(lightId, lightColor) {
    clearLights();
    $(lightId).css("backgroundColor", lightColor);
  }

  function clearLights2() {
    $('.bulb').css("backgroundColor", "black");
  }
});