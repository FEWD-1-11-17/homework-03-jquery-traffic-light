$('#stopButton').click(illuminateRed);
// document.getElementById('slowButton').onclick = illuminateYellow;
$('#slowButton').click(illuminateYellow);
// document.getElementById('goButton').onclick = illuminateGreen;
$('#goButton').click(illuminateGreen);

function illuminateRed() {
  clearLights();
  $('#stopLight').css('backgroundColor', 'red');
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css('backgroundColor', 'yellow');
}

function illuminateGreen() {
  clearLights();
  // document.getElementById("goLight").style.backgroundColor = "green";
  $('#goLight').css('backgroundColor', 'green')
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}