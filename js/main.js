$(document).ready(function(){

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);





function illuminateRed() {
  clearLights();
  $("#stopLight").css("background-color", "red");
}

function illuminateYellow() {
  clearLights();
 $("#slowLight").css("background-color", "yellow");}

function illuminateGreen() {
  clearLights();
   $("#goLight").css("background-color", "green");
}



function clearLights() {
 $("#stopLight").css("background-color", "black");
 $("#slowLight").css("background-color", "black");
 $("#goLight").css("background-color", "black");
}

})

