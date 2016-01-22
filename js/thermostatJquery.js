var thermostat = new Thermostat();
$(document).ready(function() {

  var hue;
  updateTemp();

  $( "#draggable" ).draggable();

  function refreshBg() {
    // var hue = getRGB();
    $('body').animate( { backgroundColor: hue }, 100);
  }

  function getRGB() {
    var blue = Math.ceil(255/thermostat.getTemp()),
      // green = Math.ceil(222/thermostat.getTemp() * Math.random()),
      green = 120;
      this.hue = 'rgb('+thermostat.getTemp()*8+','+120+','+blue+')';
  }


  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
    refreshBg();
  };

  $('#temp-down').click(function() {
    thermostat.downTemp();
    updateTemp();
  });

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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    console.log(data)
    $('#location-temp').text(data.main.temp);
    $('#wind-direction').text(data.wind.deg);
    $('#wind-speed').text(data.wind.speed);
    $('#location').text(data.name);
  })

});
