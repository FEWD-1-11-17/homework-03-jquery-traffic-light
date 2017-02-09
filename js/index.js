$(document).ready(function() {
    
    $("#stopButton").click(illuminateRed);
    $("#slowButton").click(illuminateYellow);
    $("#goButton").click(illuminateGreen);

    function illuminateRed() {
        $("#stopLight.bulb").css("backgroundColor", "black");
        $("#slowLight.bulb").css("backgroundColor", "black");
        $("#goLight.bulb").css("backgroundColor", "black");
        $("#stopLight.bulb").css("backgroundColor", "red");
    }

    function illuminateYellow() {
        $("#stopLight.bulb").css("backgroundColor", "black");
        $("#slowLight.bulb").css("backgroundColor", "black");
        $("#goLight.bulb").css("backgroundColor", "black");
        $("#slowLight.bulb").css("backgroundColor", "yellow");    
    }

    function illuminateGreen() {
        $("#stopLight.bulb").css("backgroundColor", "black");
        $("#slowLight.bulb").css("backgroundColor", "black");
        $("#goLight.bulb").css("backgroundColor", "black");
        $("#goLight.bulb").css("backgroundColor", "green");   
    }   
});