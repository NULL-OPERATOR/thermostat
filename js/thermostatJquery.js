$(document).ready(function() {

  var thermostat = new Thermostat();
  var hue;
  updateTemp();

  $( "#draggable" ).draggable();

  // $("#slider").slider({
  //   orientation: "horizontal",
  //   range: "min",
  //   min: 5,
  //   max: thermostat.findMax(),
  //   value: thermostat.getTemp(),
  //   slide: refreshBg,
  //   change: refreshBg
  // });
  // refreshBg();
  //
  // $( "#up-temp" ).change(function() {
  //   slider.slider( "value", this.selectedIndex + 1 );
  // });

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



  //
  // function Field(width,height,ballCount) {
  //   var _this = this;
  //   this.width = width || 640;
  //   this.height = height || this.width;
  //
  //   this.cen = {
  //     x: this.width/2,
  //     y: this.height/2
  //   };
  //
  //   this.numBalls = ballCount || 15;
  //   this.balls = [];
  //
  //   function Ball(x, y, vX, vY, radius, mass) {
  //     this.x = x || Math.random()*_this.width;
  //     this.y = y || Math.random()*_this.height;
  //
  //     this.vX = vX || Math.random()*10-Math.random()*10;
  //     this.vY = vY || Math.random()*10-Math.random()*10;
  //
  //     this.radius = radius || Math.random()*5+14;
  //
  //     this.mass = mass || Math.random();
  //
  //     this.fill = '#'+(1615).toString(16);
  //     // this.fill = getRGB();
  //     // this.fill = hue;
  //
  //     this.aabb = function(otherBall) {
  //       if (this.x + this.radius + otherBall.radius > otherBall.x && this.x < otherBall.x + this.radius + otherBall.radius && this.y + this.radius + otherBall.radius > otherBall.y && this.y < otherBall.y + this.radius + otherBall.radius) {
  //         return true;
  //       }
  //
  //       return false;
  //     }
  //
  //     this.wallCollide = function() {
  //
  //       if (this.x < this.radius) {
  //         this.x = this.radius;
  //         this.vX = -this.vX;
  //       }
  //       else if (this.x > _this.width - this.radius) {
  //         this.x = _this.width - this.radius;
  //         this.vX = -this.vX;
  //       }
  //
  //       if (this.y < this.radius) {
  //         this.y = this.radius;
  //         this.vY = -this.vY;
  //       }
  //       else if (this.y > _this.height - this.radius) {
  //         this.y = _this.height - this.radius;
  //         this.vY = -this.vY;
  //       }
  //     };
  //
  //     this.collide = function(otherBall) {
  //       var dx = otherBall.x - this.x,
  //           dy = otherBall.y - this.y,
  //           distance = Math.sqrt(dx*dx + dy*dy);
  //
  //       if (distance < this.radius + otherBall.radius) {
  //         var normalX = dx / distance,
  //             normalY = dy / distance,
  //             midpointX = (this.x + otherBall.x) / 2,
  //             midpointY = (this.y + otherBall.y) / 2,
  //             delta = ((this.vX - otherBall.vX) * normalX) + ((this.vY - otherBall.vY) * normalY),
  //             deltaX = delta*normalX,
  //             deltaY = delta*normalY;
  //
  //         this.x = midpointX - normalX * this.radius;
  //         this.y = midpointY - normalY * this.radius;
  //         this.vX -= deltaX;
  //         this.vY -= deltaY;
  //
  //         otherBall.x = midpointX + normalX * otherBall.radius;
  //         otherBall.y = midpointY + normalY * otherBall.radius;
  //         otherBall.vX += deltaX;
  //         otherBall.vY += deltaY;
  //
  //         return true;
  //       }
  //
  //       return false;
  //     };
  //
  //     this.checkCollisions = function() {
  //       for(var n in _this.balls) {
  //         var otherBall = _this.balls[n];
  //
  //         if(this!==otherBall&&this.aabb(otherBall)) {
  //           this.collide(otherBall);
  //         }
  //       }
  //     };
  //
  //     this.apply = function() {
  //       this.x += this.vX;
  //       this.y += this.vY;
  //     };
  //   }/*end of Ball*/
  //
  //   this.update = function() {
  //     while(this.balls.length < this.numBalls) {
  //       this.balls.push(new Ball());
  //     }
  //
  //     for(var a in this.balls) {
  //       this.balls[a].apply();
  //       this.balls[a].wallCollide();
  //     }
  //
  //     for(var b in this.balls) {
  //       this.balls[b].checkCollisions();
  //     }
  //   };
  //
  //   this.update();
  // }
  //
  // var field = new Field(),
  //     canvas = document.body.appendChild(document.createElement("canvas")),
  //     ctx = canvas.getContext("2d");
  //
  // console.log(field);
  // canvas.width = field.width;
  // canvas.height = field.height;
  //
  // function animate() {
  //   field.update();
  //
  //   ctx.clearRect(0,0,canvas.width,canvas.height);
  //
  //   for(var b in field.balls) {
  //     var ball = field.balls[b];
  //
  //     ctx.fillStyle = ball.fill;
  //
  //     ctx.beginPath();
  //     ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*3);
  //     ctx.fill();
  //   }
  //
  //   requestAnimationFrame(animate);
  // }
  //
  // animate();



});
