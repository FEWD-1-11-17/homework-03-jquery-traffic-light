$(document).ready(function() {
    
    $("#stopButton").click(illuminateRed);
    $("#slowButton").click(illuminateYellow);
    $("#goButton").click(illuminateGreen);

    function illuminateRed() {
        clearall();
        $("#stopLight.bulb").css("backgroundColor", "red");
    }

    function illuminateYellow() {
        clearall();
        $("#slowLight.bulb").css("backgroundColor", "yellow");    
    }

    function illuminateGreen() {
        clearall();
        $("#goLight.bulb").css("backgroundColor", "green");   
    }   

    function clearall() {
        $("#stopLight.bulb").css("backgroundColor", "black");
        $("#slowLight.bulb").css("backgroundColor", "black");
        $("#goLight.bulb").css("backgroundColor", "black");
    }
});