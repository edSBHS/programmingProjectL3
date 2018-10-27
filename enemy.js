  class Enemy {//enemy class
      constructor(src, sx, sy, sw, sh, x, y, w, h, xSpeed, delay, delayRate) {//set up of enemy
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.src = src;
          this.sx = sx;
          this.sy = sy;
          this.sw = sw;
          this.sh = sh;
          this.xSpeed = xSpeed;
          this.delay = delay;
          this.delayRate = delayRate;
      }

      drawingEnemy() {//set up for enemy
          canvasContext.drawImage(this.src, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
      }

      enemyMove() {
//          if (restart) {
//              restart = false;
//          }
          if (this.y >= ship.y) {//checks if enemy have reached the player
              lives = 0;//if so user dies
          }
          i

          this.delay += this.delayRate;

          if (Math.floor(this.delay) % 3 == 0 && Math.floor(this.delay) != 0) {//delay for enemy movement

              this.x += this.xSpeed;//moves enemy
//              sprite = sprite + 0.1;
              this.delay = 0;//sets delay back to zero, to set delay up again
          }
      }

      isDropDown() {
          return this.x >= canvas.width - this.w || this.x < 0;//detects if an enemy is touching a wall
      }
      dropDown() {
          this.xSpeed *= -1;//reverses speed
          this.y += this.h;//changes height
          this.x += this.xSpeed;
      }
  }

  function drawMakeEnemies() {//enemy set up
//basic set up for enemy variables
      var eWidth = 35;
      var eHeight = 30;
      var eYspeed = 1;
      
      if (levelCaseCheck = "hard") {//for hard level, speed is increased
          var eXspeed = 8;
      } else {
          var eXspeed = 6;
      }
      var delay = 0;
      var delayRate = 0.1;

      var eXpos = enemyCount * (eWidth + eGap);//for each enemy, and leaves a gap between them
      var eYpos = eHeight;
      var sourceW = 48;
      var sourceH = 31;
      var sourceY = 0;
      var sourceX = 0;
      var e2Ypos = eHeight * 2 + 5;//for second row of enemys
      var e3Ypos = eHeight * 3 + 10;
      var e4Ypos = eHeight * 4 + 15;
      var e5Ypos = eHeight * 5 + 20;

      var e = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, eYpos, eWidth, eHeight, eXspeed, delay, delayRate);//links all the variables, to set up the first row of enemys

      var e2 = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, e2Ypos, eWidth, eHeight, eXspeed, delay, delayRate);

      var e3 = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, e3Ypos, eWidth, eHeight, eXspeed, delay, delayRate);

      var e4 = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, e4Ypos, eWidth, eHeight, eXspeed, delay, delayRate);

      var e5 = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, e5Ypos, eWidth, eHeight, eXspeed, delay, delayRate);

      enemies.push(e5);
      enemies.push(e4);
      enemies.push(e3);
      enemies.push(e2);
      enemies.push(e);//pushes enemy row 1 into the enemies array

      enemyCount++;
  }
