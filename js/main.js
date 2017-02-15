$(function(){
  // place your code here
  // jquery code must be placed inside of a document ready block

  // Listen for click event on buttons
  // call illuminate functions when this happens
  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  // Turn all bulbs black then one the specified color
  function illuminateRed() {
    $('.bulb').css("backgroundColor","black");
    $('#stopLight').css("backgroundColor","red");
  }

  function illuminateYellow() {
  	  $('.bulb').css("backgroundColor","black");
      $('#slowLight').css("backgroundColor","yellow");
  }

  function illuminateGreen() {
    $('.bulb').css("backgroundColor","black");
    $('#goLight').css("backgroundColor", "green");
  }


});
