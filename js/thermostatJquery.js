$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemp();

  spectrum();

  function spectrum(){

     var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
     $('body').animate( { backgroundColor: hue }, 1000, spectrum);
    //  spectrum();
  }

  $(function() {
    $( "#slider" ).slider();
  });


  $('#temp-down').click(function() {
    thermostat.downTemp();
    updateTemp();
  });

  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
  };

  $('#temp-up').click(function() {
    thermostat.upTemp();
    updateTemp();
  });

  $('#reset-temp').click(function() {
    thermostat.resetTemp();
    updateTemp();
  });

  $('#power-save-switch').click(function() {
    thermostat.powerSaveSwitch();
    updateTemp();
  });

});
