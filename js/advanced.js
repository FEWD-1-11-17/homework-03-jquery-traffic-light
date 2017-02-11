$(function(){
  var bulbsRegistry = {}; 
  var buttonsRegistry = {};

  discoverBulbs();
  discoverButtons();

  function discoverBulbs() {
    $(".bulb").each(function(index){
      bulbsRegistry[$(this).attr("id")] = $(this).css("backgroundColor");
      turnBulbOff($(this));
      $(this).click(handleBulbClick);
    });
  }

  function discoverButtons() {
    $(".button").each(function(index){
      buttonsRegistry[$(this).attr("id")] = $(".bulb")[index];
      $(this).click(handleButtonClick);
    });
  }

  function handleBulbClick(){
    clearBulbs();
    turnBulbOn($(this));
  }

  function handleButtonClick(){
    clearBulbs();
    turnBulbOn(buttonsRegistry[$(this).attr("id")]);
  }

  function turnBulbOff(bulb) {
    setBulbColor(bulb, "black");
  }

  function turnBulbOn(bulb){
    if (typeof bulb.attr == "function") { 
      setBulbColor(bulb, bulbsRegistry[bulb.attr("id")]);
    } else {
      setBulbColor(bulb, bulbsRegistry[bulb.id]);
    }
  }

  function setBulbColor(bulb, bulbColor) {
    $(bulb).css("backgroundColor", bulbColor);
  }

  function clearBulbs() {
    $(".bulb").each(function(index) {
      turnBulbOff($(this));
    });
  }
});