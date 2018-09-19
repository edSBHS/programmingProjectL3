    class Enemy {

    constructor(src,sx,sy,sw,sh,x,y,w,h,xSpeed) {
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
                 }
    

        drawingEnemy(){
            canvasContext.drawImage(this.src, this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h);
        }
    
        enemyMove(){
            this.x += this.xSpeed;
        }
        enemyDrop(){
            if(this.x > canvas.width - this.w || this.x < 0){
                this.y += this.h + eGap;
                this.xSpeed *= -1;
                this.x += this.xSpeed;
            }
            
        }
  

    }

    function drawMakeEnemies() {
  
        var eWidth = 35;
        var eHeight = 33;
        var eXpos = enemyCount * (eWidth + eGap);
        var eYpos = 0 + eHeight;
        var eYspeed = 1;
        var eXspeed = 1;
        var delay = 5;
        var sourceX = 50;
        var sourceY = 31;
        var delayRate = 0.1;
        var color = 'red';
      

        var e = new Enemy(enemy, 0, 0, sourceX, sourceY, eXpos, eYpos, eWidth, eHeight,eXspeed);

        enemies.push(e);
          enemyCount++;

    }
