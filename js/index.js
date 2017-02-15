
$(document).ready(function(){

//BELOW: You're slowly replacing native javascript with jquery; 
//and you've at least gotten the first line to work - that is, a 
// jquery commaid *is* governing the red light (or part of it)...

//So far, we've put the following three lines into jquery - they seem
//to be telling the browser to listen for the click and what function
//to activate. The struggle now is to outline the functions themselves
//in jquery. So far, we're still depending on native JS for the functions.

$('#stopButton').click(illuminateRed)
$('#slowButton').click(illuminateYellow)
$('#goButton').click(illuminateGreen)


function illuminateRed() {
  clearLights();
  // $('#stopLight').toggleClass('red')
  // $('#stopLight').addClass('red');
  // $('#stoplight').attr('class','red');
  // $('#stopLight').css('backgroundColor','red')
    document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  // $('#slowLight').toggleClass('illuminateYellow')
  // $('#stopLight').addClass('red');
  // $('#stoplight').attr('class','red');
  // $('#stopLight').css('backgroundColor','red')
  // $('stopLight').('backgroundColor','red')
  
  document.getElementById('slowLight').style.backgroundColor = "orange";
}

function illuminateGreen(){
    clearLights();
    // $('#goLight').toggleClass('green')
    // $('#stopLight').addClass('red');
    // $('#stoplight').attr('class','red');
    // $('#stopLight').css('backgroundColor','red')
    document.getElementById('goLight').style.backgroundColor= "green";


}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
  // $('stopLight').addClass('black');
  // $('slowLight').addClass('black');
  // $('goLight').addClass('black');

}

});