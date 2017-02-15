$(function(){

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateRed() {
  lightsOff()
  $('#stopLight').addClass('stopLightOn');
}

function illuminateYellow() {
  lightsOff()
  $('#slowLight').addClass('slowLightOn');

}

function illuminateGreen() {
  lightsOff()
  $('#goLight').addClass('goLightOn');
}

function lightsOff() {
  $('.bulb').removeClass('stopLightOn slowLightOn goLightOn');
}

})