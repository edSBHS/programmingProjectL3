  class Enemy { //enemy class
      constructor(src, sx, sy, sw, sh, x, y, w, h, xSpeed, delay, delayRate) { //set up of enemy
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

      drawingEnemy() { //set up for enemy
          canvasContext.drawImage(this.src, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
      }

      enemyMove() {
          //          if (restart) {
          //              restart = false;
          //          }
          if (this.y >= ship.y) { //checks if enemy have reached the player
              lives = 0; //if so user dies
          }
          i

          this.delay += this.delayRate;

          if (Math.floor(this.delay) % 3 == 0 && Math.floor(this.delay) != 0) { //delay for enemy movement

              this.x += this.xSpeed; //moves enemy
              //              sprite = sprite + 0.1;
              this.delay = 0; //sets delay back to zero, to set delay up again
          }
      }

      isDropDown() {
          return this.x >= canvas.width - this.w || this.x < 0; //detects if an enemy is touching a wall
      }
      dropDown() {
          this.xSpeed *= -1; //reverses speed
          this.y += this.h; //changes height
          this.x += this.xSpeed;
      }
  }

  function drawMakeEnemies() { //enemy set up
      //basic set up for enemy variables

      if (levelCaseCheck = "hard") { //for hard level, speed is increased
          var eXspeed = 8;
      } else {
          var eXspeed = 6;
      }
      var delay = 0;
      var delayRate = 0.1;

      var eWidth = 35;
      var eHeight = 30;
      var e2Width = 25;
      var e4Width = 30;

      var eYspeed = 1;

      var eXpos = enemyCount * (eWidth + eGap); //for each enemy, and leaves a gap between them
      var eYpos = eHeight;



      var e2Ypos = eHeight * 2 + 5; //for second row of enemys
      var e3Ypos = eHeight * 3 + 10;
      var e4Ypos = eHeight * 4 + 15;
      var e5Ypos = eHeight * 5 + 20;


      var sourceY = 0;
      var sourceX = 0;

      var sourceW = 48;
      var sourceH = 29;
      var sourceW2 = 80;
      var sourceH2 = 80;
      var sourceW3 = 120;
      var sourceH3 = 80;
      var sourceW4 = 110;
      var sourceH4 = 80;


      var e = new Enemy(enemy, sourceX, sourceY, sourceW, sourceH, eXpos, eYpos, eWidth, eHeight, eXspeed, delay, delayRate); //links all the variables, to set up the first row of enemys

      var e2 = new Enemy(enemy2, sourceX, sourceY, sourceW2, sourceH2, eXpos, e2Ypos, e2Width, eHeight, eXspeed, delay, delayRate);

      var e3 = new Enemy(enemy3, sourceX, sourceY, sourceW3, sourceH3, eXpos, e3Ypos, e2Width, eHeight, eXspeed, delay, delayRate);

      var e4 = new Enemy(enemy4, sourceX, sourceY, sourceW4, sourceH4, eXpos, e4Ypos, e4Width, eHeight, eXspeed, delay, delayRate);

      var e5 = new Enemy(enemy4, sourceX + 110, sourceY, sourceW4 + 7, sourceH4, eXpos, e5Ypos, e2Width + 6, eHeight, eXspeed, delay, delayRate);

      enemies.push(e5);
      enemies.push(e4);
      enemies.push(e3);
      enemies.push(e2);
      enemies.push(e); //pushes enemy row 1 into the enemies array

      enemyCount++;
  }
